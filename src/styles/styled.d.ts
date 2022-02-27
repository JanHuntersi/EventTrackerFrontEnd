// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    colors: {
      backgroundColor: string;
      surfaceColor: string;
      primaryColor: string;
      thirdColor: string;
    };
  }
}
