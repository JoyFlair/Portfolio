import { useState } from 'react';
import axios from 'axios';

export default function Form({ fetchContacts }) {
  const [userId, setUserId] = useState(1); // Replace with actual user ID
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/api1/getcontacts.php', { userId, name, phone, email });
      if (response.data.success) {
        fetchContacts();
        setName('');
        setPhone('');
        setEmail('');
      } else {
        console.error('Failed to add contact');
      }
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
