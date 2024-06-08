import './styles/image.css';
import { useState } from "react";

const ImageGenerator = ({ userPoints, setUserPoints }) => {
  const [searchText, setSearchText] = useState("");
  const [imageSrc, setImgSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClick = async () => {
    setIsLoading(true); // Set loading to true when the button is clicked
    // setUserPoints(-1);
    try {
      const authToken = localStorage.getItem("authToken");
      console.log("auth :- " + authToken);
      const res = await fetch(`http://localhost:1400/api/v1/images`, {
        method: "POST",
        body: JSON.stringify({
          searchText: searchText,
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        },
      });
      const data = await res.json();
      if (data?.status === 'success') {
        setImgSrc(data.data.imageUrl); 
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div>
      <div className="imgMain">
        <p style={{ color: 'red' }}>State: {userPoints}</p>
        <div className='input'>
          <input 
            onChange={handleChange} 
            value={searchText} 
            type="text" 
            placeholder="What do you want to see..." 
          />
          <button onClick={handleClick}>Generate Image</button>
        </div>
        <div className='box'>
          {isLoading ? (
            <div className="spinner"></div> 
          ) : (
            <img src={imageSrc} alt="Generated" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
