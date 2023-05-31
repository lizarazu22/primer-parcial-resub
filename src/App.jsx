import React, { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedMessage = localStorage.getItem('message');

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedMessage) setMessage(storedMessage);
  }, []);

  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
  }, [name, email, message]);

  const features = [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    'Feature 4',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-200">
      <div className="w-96 p-4 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Contact Form</h1>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-2">
            <label htmlFor="name" className="text-lg">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 px-2 py-1 text-lg"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="text-lg">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 px-2 py-1 text-lg"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="message" className="text-lg">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 px-2 py-1 text-lg"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>

        <ul className="list-disc ml-4 text-lg">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
