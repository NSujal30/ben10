import React from "react";
import "./Episodes.css";
import { motion } from "framer-motion";
import { FaPlay, FaStar, FaClock, FaTv } from "react-icons/fa";

const Episodes = () => {
  const episodes = [
    {
      id: 1,
      title: "And Then There Were 10",
      description: "Ben discovers the Omnitrix and transforms into his first alien, Heatblast, to save his grandfather from a robot.",
      image: "/images/slider1.png",
      season: "Season 1",
      episode: "Episode 1",
      rating: 4.8,
      duration: "22 min",
      link: "https://www.cartoonnetwork.com/video/ben-10"
    },
    {
      id: 2,
      title: "Washington B.C.",
      description: "Ben, Gwen, and Grandpa Max visit Washington D.C. where Ben must stop an alien from stealing the Declaration of Independence.",
      image: "/images/slider2.png",
      season: "Season 1",
      episode: "Episode 2",
      rating: 4.7,
      duration: "22 min",
      link: "https://www.cartoonnetwork.com/video/ben-10"
    },
    {
      id: 3,
      title: "The Krakken",
      description: "Ben faces a sea monster while on a fishing trip. He must use his water-based alien forms to save the day.",
      image: "/images/slider3.png",
      season: "Season 1",
      episode: "Episode 3",
      rating: 4.6,
      duration: "22 min",
      link: "https://www.cartoonnetwork.com/video/ben-10"
    },
    {
      id: 4,
      title: "Permanent Retirement",
      description: "Ben encounters a villain who can age people rapidly. He must find a way to reverse the aging process.",
      image: "/images/slider4.png",
      season: "Season 1",
      episode: "Episode 4",
      rating: 4.7,
      duration: "22 min",
      link: "https://www.cartoonnetwork.com/video/ben-10"
    },
    {
      id: 5,
      title: "Hunted",
      description: "Ben is hunted by a bounty hunter who wants the Omnitrix. He must use all his alien forms to survive.",
      image: "/images/slider5.png",
      season: "Season 1",
      episode: "Episode 5",
      rating: 4.8,
      duration: "22 min",
      link: "https://www.cartoonnetwork.com/video/ben-10"
    },
    {
      id: 6,
      title: "Tourist Trap",
      description: "Ben and his family visit a theme park that turns out to be a trap set by an alien villain.",
      image: "/images/slider6.png",
      season: "Season 1",
      episode: "Episode 6",
      rating: 4.6,
      duration: "22 min",
      link: "https://www.cartoonnetwork.com/video/ben-10"
    },
    {
      id: 7,
      title: "Kevin 11",
      description: "Ben meets Kevin, a boy who can absorb energy. Kevin becomes obsessed with the Omnitrix and turns into a villain.",
      image: "/images/slider1.png",
      season: "Season 1",
      episode: "Episode 7",
      rating: 4.9,
      duration: "22 min",
      link: "https://www.cartoonnetwork.com/video/ben-10"
    },
    {
      id: 8,
      title: "The Alliance",
      description: "Multiple villains team up to steal the Omnitrix. Ben must fight them all at once using different alien forms.",
      image: "/images/slider2.png",
      season: "Season 1",
      episode: "Episode 8",
      rating: 4.7,
      duration: "22 min",
      link: "https://www.cartoonnetwork.com/video/ben-10"
    },
    {
      id: 9,
      title: "Last Laugh",
      description: "Ben faces Zombozo, a clown-themed villain who feeds on fear. He must overcome his own fears to win.",
      image: "/images/slider3.png",
      season: "Season 1",
      episode: "Episode 9",
      rating: 4.8,
      duration: "22 min",
      link: "https://www.cartoonnetwork.com/video/ben-10"
    },
    {
      id: 10,
      title: "Lucky Girl",
      description: "Gwen discovers she has magical powers. Ben and Gwen must work together to stop a powerful enemy.",
      image: "/images/slider4.png",
      season: "Season 1",
      episode: "Episode 10",
      rating: 4.7,
      duration: "22 min",
      link: "https://www.cartoonnetwork.com/video/ben-10"
    },
    {
      id: 11,
      title: "A Small Problem",
      description: "Ben accidentally shrinks himself and must find a way to return to normal size while fighting tiny enemies.",
      image: "/images/slider5.png",
      season: "Season 1",
      episode: "Episode 11",
      rating: 4.6,
      duration: "22 min",
      link: "https://www.cartoonnetwork.com/video/ben-10"
    },
    {
      id: 12,
      title: "Side Effects",
      description: "The Omnitrix malfunctions and Ben can't control his transformations. He must fix it before it's too late.",
      image: "/images/slider6.png",
      season: "Season 1",
      episode: "Episode 12",
      rating: 4.8,
      duration: "22 min",
      link: "https://www.cartoonnetwork.com/video/ben-10"
    }
  ];

  return (
    <div className="episodes-section" id="episodes">
      <div className="episodes-container">
        <motion.div
          className="episodes-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>
            <FaTv className="header-icon" />
            Ben 10 Episodes
          </h1>
          <p>Watch all your favorite Ben 10 episodes and adventures!</p>
        </motion.div>

        <div className="episodes-grid">
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              className="episode-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => {
                // Make entire card clickable - redirects to episode
                window.open(episode.link, '_blank', 'noopener,noreferrer');
              }}
              style={{ cursor: 'pointer' }}
            >
              <div className="episode-image">
                <img src={episode.image} alt={episode.title} />
                <div className="episode-overlay">
                  <div className="play-button">
                    <FaPlay />
                    Watch Now
                  </div>
                </div>
                <div className="episode-badge">
                  <span>{episode.season}</span>
                </div>
              </div>
              <div className="episode-info">
                <div className="episode-meta">
                  <span className="episode-number">{episode.episode}</span>
                  <span className="episode-duration">
                    <FaClock /> {episode.duration}
                  </span>
                </div>
                <h3>{episode.title}</h3>
                <p>{episode.description}</p>
                <div className="episode-rating">
                  <FaStar className="star-icon" />
                  <span>{episode.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Episodes;

