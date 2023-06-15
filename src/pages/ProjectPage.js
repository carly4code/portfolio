import React, { useEffect, useState } from 'react';
import LinkIcon from "../image/link-icon.svg";
import zerone from "../image/zerone-desktop.png";
import Button from "../components/button.js";
import { data } from '../data/data.js';
import { useParams } from 'react-router-dom';
import useFetch from "../hooks/useFetch.js";

// Todo:need to setup json server and fetch each data to a single page

const ProjectPage = () => {
    const [data, setData] = useState([]);
    const { projectId } = useParams();

    const getData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(`http://localhost:3000/project/${projectId}`, requestOptions)
            .then((response) => response.json())
            .then((result) => setData(result))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getData();
    }, []);


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
                        {/* todo: don't know can't map img when turning into nested data
                        need to map the img  */}
                                     <div className="showcase">
                                        <img
                                        src={data.img1}></img>
                                     </div>
                                     <div className="showcase">
                                        <img
                                        src={data.img2}></img>
                                     </div>
                                     <div className="showcase">
                                        <img
                                        src={data.img3}></img>
                                     </div>



                    </div><div className='button-group'>
                        {/* <div className='prev-btn'><Button label="Previous" /></div>
                            <div className='next-btn'><Button label="Next" /></div> */}
                    </div></>
            }
        </div >
    );
};

export default ProjectPage;






