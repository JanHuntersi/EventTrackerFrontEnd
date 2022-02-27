import { Redirect } from 'react-router';
import { useAuth } from '../context/AuthContext';

function ProfilePage() {
  const { currentUser, signOut } = useAuth();
  if (currentUser === null) {
    return (<Redirect to="/" />);
  }

  return (
    <div>
      <button onClick={signOut}>Log Out</button>
      <img src={currentUser.user.data.profilePicURL}/>
      <pre>
        { JSON.stringify(currentUser, null, 2) }
      </pre>


      <form method="POST" encType='multipart/form-data' action="/api/upload">
        <input type="file" name="imageFile" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ProfilePage;
