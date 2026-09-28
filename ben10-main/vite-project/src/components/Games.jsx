import React from "react";
import "./Games.css";
import { motion } from "framer-motion";
import { FaGamepad, FaPlay, FaStar } from "react-icons/fa";

const Games = () => {
  const games = [
    {
      id: 1,
      title: "Ben 10: Power Trip",
      description: "Join Ben Tennyson on an epic adventure across Europe! Transform into powerful aliens and save the world from evil forces.",
      image: "/images/alien1.png",
      category: "Adventure",
      rating: 4.5,
      link: "https://www.play-games.com/game/25105/ben-10-omnitrix-shadow.html"
    },
    {
      id: 2,
      title: "Ben 10: Alien Force",
      description: "Battle against the Highbreed invasion using Ben's powerful alien transformations. Master each alien's unique abilities!",
      image: "/images/alien2.png",
      category: "Action",
      rating: 4.7,
      link: "https://www.play-games.com/game/2017/savage-pursuit.html"
    },
    {
      id: 3,
      title: "Omnitrix Battle Arena",
      description: "Fight in epic battles using different alien forms. Choose your favorite alien and dominate the arena!",
      image: "/images/alien3.png",
      category: "Fighting",
      rating: 4.6,
      link: "https://www.play-games.com/game/3881/heroes-united.html"
    },
    {
      id: 4,
      title: "Ben 10: Ultimate Alien",
      description: "Unlock ultimate forms of your favorite aliens. Experience enhanced powers and new abilities in this action-packed game!",
      image: "/images/alien4.png",
      category: "Action",
      rating: 4.8,
      link: "https://www.miniplay.com/game/ben-10-street-figh"
    },
    {
      id: 5,
      title: "Ben 10: Omnitrix Unleashed",
      description: "Transform into powerful aliens and battle enemies! Use the Omnitrix to save the world in this action-packed game.",
      image: "/images/alien5.png",
      category: "Action",
      rating: 4.6,
      link: "https://www.play-games.com/game/18984/ben-10-fight-2.html"
    },
    {
      id: 6,
      title: "Ben 10: Galactic Racing",
      description: "Race across alien planets with Ben and his friends. Use alien powers to gain speed and win the championship!",
      image: "/images/alien6.png",
      category: "Racing",
      rating: 4.5,
      link: "https://www.play-games.com/game/17969/ben-10-ultimate-alien-galactic-challenge.html"
    },
    {
      id: 7,
      title: "Ben 10: Protector of Earth",
      description: "Defend Earth from alien invaders! Use different alien forms to protect the planet from destruction.",
      image: "/images/alien1.png",
      category: "Action",
      rating: 4.7,
      link: "https://www.cartoonnetwork.com/games/ben-10/protector-of-earth"
    },
    {
      id: 8,
      title: "Ben 10: Alien Swarm",
      description: "Battle against swarms of alien enemies! Transform and fight your way through challenging levels.",
      image: "/images/alien2.png",
      category: "Action",
      rating: 4.6,
      link: "https://www.cartoonnetwork.com/games/ben-10/alien-swarm"
    },
    {
      id: 9,
      title: "Ben 10: Cosmic Destruction",
      description: "Save the universe from cosmic threats! Master all alien forms and their ultimate powers.",
      image: "/images/alien3.png",
      category: "Adventure",
      rating: 4.8,
      link: "https://www.cartoonnetwork.com/games/ben-10"
    },
    {
      id: 10,
      title: "Ben 10: Omniverse",
      description: "Explore the multiverse with Ben! Discover new aliens and battle across different dimensions.",
      image: "/images/alien4.png",
      category: "Adventure",
      rating: 4.7,
      link: "https://www.cartoonnetwork.com/games/ben-10/omniverse"
    },
    {
      id: 11,
      title: "Ben 10: Up to Speed",
      description: "Race through time and space! Use alien speed powers to outrun enemies and complete missions.",
      image: "/images/alien5.png",
      category: "Racing",
      rating: 4.5,
      link: "https://www.cartoonnetwork.com/games/ben-10/up-to-speed"
    },
    {
      id: 12,
      title: "Ben 10: Breakpoint",
      description: "Break through enemy defenses! Use strategic alien transformations to overcome obstacles.",
      image: "/images/alien6.png",
      category: "Strategy",
      rating: 4.6,
      link: "https://www.cartoonnetwork.com/games/ben-10"
    }
  ];

  return (
    <div className="games-section" id="games">
      <div className="games-container">
        <motion.div
          className="games-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>
            <FaGamepad className="header-icon" />
            Ben 10 Games
          </h1>
          <p>Experience the power of the Omnitrix in these exciting games!</p>
        </motion.div>

        <div className="games-grid">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              className="game-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={(e) => {
                e.preventDefault();
                // Make entire card clickable - redirects to game
                if (game.link) {
                  window.open(game.link, '_blank', 'noopener,noreferrer');
                }
              }}
              onKeyDown={(e) => {
                // Make keyboard accessible
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (game.link) {
                    window.open(game.link, '_blank', 'noopener,noreferrer');
                  }
                }
              }}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              aria-label={`Play ${game.title}`}
            >
              <div className="game-image">
                <img src={game.image} alt={game.title} />
                <div className="game-overlay">
                  <div className="play-button">
                    <FaPlay />
                    Play Now
                  </div>
                </div>
              </div>
              <div className="game-info">
                <div className="game-category">{game.category}</div>
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                <div className="game-rating">
                  <FaStar className="star-icon" />
                  <span>{game.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;

