import { motion } from 'framer-motion';
import logoImg from '../assets/mypic.webp'; // adjust path to your logo image

const Logo = ({ isScrolled }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex items-center gap-2"
    >
      <img
        src={logoImg}
        alt="logo"
        className={`${
          isScrolled
            ? 'w-8 h-8 rounded-full border border-amber-50'
            : 'w-10 h-10 rounded-full border border-amber-50'
        } object-cover`}
      />

      <h1
        className={`${
          isScrolled
            ? 'border-r border-amber-50 pr-3 text-[1.2rem] text-white font-quicksand font-[900]'
            : 'font-quicksand font-[900] text-2xl text-white'
        }`}
      >
        {isScrolled ? 'HS' : 'Haad Sheikh'}
      </h1>
    </motion.div>
  );
};

export default Logo;
