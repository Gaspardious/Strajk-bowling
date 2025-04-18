import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();


  return (
    <div 
    className="flex flex-col justify-center items-center h-screen bg-pink"
    >
      <svg 
      className='cursor-pointer'
      onClick={() => navigate("/booking")} 
      width="136" height="196" viewBox="0 0 136 196" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 128.154C0 84.3365 58.5556 50.4135 45.3333 0C76.5 0 136 45.2308 136 128.154C136 146.148 128.836 163.405 116.083 176.128C103.331 188.852 86.0347 196 68 196C49.9653 196 32.6692 188.852 19.9167 176.128C7.16426 163.405 0 146.148 0 128.154Z" fill="#F2C94C"/>
      <path d="M113 109.692C113 136.605 94.5 147 76 147C57.5 147 39 136.605 39 109.692C39 82.7795 62.125 69.5865 57.5 50C81.7812 50 113 82.7795 113 109.692Z" fill="#F2994A"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M68 196C97.8234 196 122 171.823 122 142C122 112.177 97.8234 88 68 88C38.1766 88 14 112.177 14 142C14 171.823 38.1766 196 68 196ZM57 107C54.2386 107 52 105.209 52 103C52 100.791 54.2386 99 57 99C59.7614 99 62 100.791 62 103C62 105.209 59.7614 107 57 107ZM72 107C72 109.209 74.2386 111 77 111C79.7614 111 82 109.209 82 107C82 104.791 79.7614 103 77 103C74.2386 103 72 104.791 72 107ZM59 142C54.0294 142 50 138.194 50 133.5C50 128.806 54.0294 125 59 125C63.9706 125 68 128.806 68 133.5C68 138.194 63.9706 142 59 142Z" fill="#EC315A"/>
      </svg>
      <h1 
      className="font-title text-6xl text-textpink cursor-pointer"
      onClick={() => navigate("/booking")}
      >STRAJK</h1>
      <h2 
      className="text-2xl tracking-widest cursor-pointer"
      onClick={() => navigate("/booking")}
      >BOWLING</h2>
    </div>
  );
};

export default Home;
