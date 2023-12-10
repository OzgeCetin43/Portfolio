import React, { useState } from "react";
import { DiGithubFull } from "react-icons/di";
import { works } from "../../assets/data/works";
import "./Works.css";

const Works = () => {
    const [activeProjectType, setActiveProjectType] = useState("all");

    return <div className="works-container">
        <h2 className="works-title"><span>#</span>works_</h2>
        <div className="works-container-content" id="my-works">
            <div className="work-container-left">
                <button onClick={() => setActiveProjectType("all")} className={activeProjectType === "all" ? "work-type-button active" : "work-type-button"}><span>#</span> All Projects</button>
                <button onClick={() => setActiveProjectType("htmlCss")} className={activeProjectType === "htmlCss" ? "work-type-button active" : "work-type-button"}><span>#</span> HTML && CSS</button>
                <button onClick={() => setActiveProjectType("react")} className={activeProjectType === "react" ? "work-type-button active" : "work-type-button"}><span>#</span> React</button>
            </div>
            <div className="work-container-right">
                <div className="work-items">
                    {
                        works.map(work => (
                            <>
                                {
                                    work.key === activeProjectType || activeProjectType === "all" ? (
                                        <div className="work-item" key={work.id}>
                                            <img src={work.image} alt="project" className="work-item-image" />
                                            <h3 className="work-item-name"><span>#</span>{work.name}_</h3>
                                            <p className="work-item-description">{work.description}</p>
                                            <div className="work-language-container">
                                                <a href={work.link} target="_blank" className="work-item-github-link">
                                                    <DiGithubFull />
                                                </a>
                                                <div>
                                                    {
                                                        work.languages.map((language, index) => (
                                                            <span key={index} className="work-item-language-used">{language}</span>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }
                            </>
                        ))
                    }
                    {
                        works.filter(x => x.key === activeProjectType || activeProjectType === "all").length === 0 ? (
                            <div className="work-item-comming-soon">
                                <div className="work-item-comming-soon-image">?</div>
                                <h3 className="work-item-comming-soon-name"><span>#</span>comming-soon_</h3>
                                <p className="work-item-comming-soon-description"></p>
                                <div className="work-language-container">
                                    <div className="work-item-comming-soon-github-link"></div>
                                    <div>
                                        <div className="work-item-comming-soon-language-used"></div>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </div>
    </div >
}

export default Works;