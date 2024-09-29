import React from 'react';
import './About.css';

const About = () => {
  return (
    <main className="about">
      <h2>About CollaborArt</h2>
      <p>
        CollaborArt uses blockchain technology to transparently track each creator's contribution to a project,
        ensuring clear ownership and fair compensation. Our platform mints NFTs with embedded metadata about
        each contributor's effort, enabling creators to receive ongoing royalties from sales.
      </p>

      <h3>How Different Are We?</h3>
      <ul>
        <li><strong>Blockchain-based Transparent Collaboration:</strong> We track every creator’s contribution using blockchain technology.</li>
        <li><strong>NFT-based Ownership and Royalties:</strong> Our NFTs ensure verifiable proof of ownership and ongoing royalties.</li>
        <li><strong>Effort-Based Contribution Tracking:</strong> Contributions are automatically tracked and rewarded using smart contracts.</li>
      </ul>

      <h3>How We Solve the Problem</h3>
      <ul>
        <li>Clear ownership and fair compensation for all creators.</li>
        <li>Automated royalties distribution through smart contracts.</li>
        <li>Real-time collaboration tools and decentralized marketplace for easy collaboration and monetization.</li>
      </ul>
    </main>
  );
}

export default About;
