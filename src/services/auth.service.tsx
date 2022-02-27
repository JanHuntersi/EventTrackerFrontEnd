import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import { shareReplay, switchMap, skipWhile, distinctUntilChanged, takeUntil, map } from 'rxjs/operators';

export interface SessionData {}

const $sessionSubject = new BehaviorSubject<SessionData | null>(null);
const $enableSubject = new BehaviorSubject<boolean>(false);

export const $enable = $enableSubject
    .pipe(
        distinctUntilChanged(),
        shareReplay(),
    );
export const $session = $enable
    .pipe(
        skipWhile((enabled) => enabled),
        switchMap(() => $sessionSubject),
        takeUntil($enable),
        shareReplay(),
    );

export const $isLogedIn = $session
    .pipe(
        map((session) => !!session),
        shareReplay(),
    );

export const initialize = async () => {
  await axios.get<SessionData>('/api/session')
      .then(async (req)=> $sessionSubject.next(req.data!))
      .catch((ignore)=> {})
      .finally(() => $enableSubject.next(true));
};

