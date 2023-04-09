import { useState } from 'react';

function UpdateUser({ user }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    // ici, vous pouvez envoyer une requête pour mettre à jour l'utilisateur en utilisant les données de state
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateUser;