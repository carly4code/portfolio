import React, { useEffect, useState } from 'react';
import LinkIcon from "../image/link-icon.svg";
// import Button from "../components/ArrowBtn.js";

import { useParams } from 'react-router-dom';


// Todo:need to setup json server and fetch each data to a single page

const ProjectPage = () => {
    const [data, setData] = useState([]);
    const { projectId } = useParams();

    const getData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        const baseUrl = 'https://carlyportfolio-890ca102755c.herokuapp.com/project';



        // Fetch local host:
        //  fetch(`http://localhost:3000/project/${projectId}`, requestOptions)
        //      fetch(`https://carlyportfolio-890ca102755c.herokuapp.com/project/${projectId}`, requestOptions)
        //         .then((response) => response.json())
        //         .then((result) => setData(result))
        //         .catch((error) => console.log("error", error));
        // };
        const fetchTasks = async () => {
            // const res = await axios.get(baseUrl);
            const { data } = await axios.get(`${baseUrl}/${taskId}`);
            setData(data);
        };

        useEffect(() => {
            fetchTasks();
        }, []);


        // useEffect(() => {
        //     getData();
        // }, []);

        // element: image showcase
        let string = [data.images][0];
        let imgShowcase;
        if (typeof (string) != 'undefined') {
            imgShowcase = Object.keys(string).map((key) => (
                <div className="showcase" key={key}><img src={string[key]}></img></div>
            ));
        }


        return (
            <div className="pageWrapper">


                {data &&
                    <>
                        <div className='project-text'>
                            <div className="section-head">{data.title}</div>
                            {data.link
                                ? <><a href={data.link} target="_blank"><img src={LinkIcon} /></a></>
                                : null}
                            <div className='project-detail'>
                                <p>Overview:{data.overview}</p><br></br>
                                <p>Structure: {data.structure}</p>
                            </div>
                        </div>

                        <div className='showcase-outter'>
                            {imgShowcase}
                        </div>

                        <div className='button-group'>
                            {/* <div className='prev-btn'><Button label="Previous" /></div>
                            <div className='next-btn'><Button label="Next" /></div> */}
                        </div></>
                }
            </div >
        );
    }
};

    export default ProjectPage;






