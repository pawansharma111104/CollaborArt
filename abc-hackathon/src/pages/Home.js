import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      <h1>Welcome to CollaborArt</h1>
      <p>
        CollaborArt is a blockchain-powered platform where creators collaborate to produce digital art and music.
        By tracking each creator's contribution via smart contracts, CollaborArt ensures transparent ownership
        and fair distribution of royalties. The final work is minted as an NFT, providing verifiable proof of collaboration
        and effort.
      </p>

      <h2>Team Details</h2>
      <ul>
        <li><strong>Team Name:</strong> BitBash</li>
        <li><strong>Team Leader:</strong> Priyanshu Raj</li>
        <li><strong>Problem Statement:</strong> Blockchain in Media</li>
      </ul>
    </main>
  );
}

export default Home;
