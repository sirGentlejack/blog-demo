import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    // let name = 'mario';
    const [ name, setName] = useState('jack');
    const [ age, setAge] = useState(24);

    const [data , setData] = useState(null);

    const handleClick = () => {
       setName('frank');
       setAge(30);
    }

    const [ name1, setName1] = useState('jack');
    
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    
    return ( 
        <div className="home">
            
            <h2>Homepage</h2>
            <p>{name} is {age} years old. </p>
            <button className='co-btn' onClick={handleClick}>Co-Founders</button>

            {error && <div> {error} </div>}

            { isPending && <div>Loading...</div> }

            { blogs && <BlogList blogs={blogs} title="All Blogs"  />}
            
            <button onClick={() => setName1('luigi')}>change name</button>
            <p> {name1} </p>

        </div>
     );
}
 
export default Home;