import React from 'react';
import './css/Editor.css';

const Editor = () => {
    return (
        <div className="container">
            <div className="window">
                <div className="title-bar">
                    <div className="buttons">
                        <div className="button close"></div>
                        <div className="button minimize"></div>
                        <div className="button maximize"></div>
                    </div>
                    <div className="title">yeyey</div> {/* Updated window name */}
                </div>
                <div className="content">
                    <div className="sidebar">
                        <div className="folder">
                            <div className="folder-name folder-icon">Pinak Kundu</div>
                            <div className="folder">
                                <div className="folder-name arrow-icon">About Me</div>
                            </div>
                            <div className="folder">
                                <div className="folder-name arrow-icon">Works</div>
                            </div>
                            <div className="folder">
                                <div className="folder-name arrow-icon">src</div>
                                <div className="file">index.js</div>
                            </div>
                        </div>
                    </div>
                    <div className="editor">
                        <div className="line">
                            <span className="line-number">1</span>
                            <span className="code"><span className="comment">//...</span></span>
                        </div>
                        <div className="line">
                            <span className="line-number">2</span>
                            <span className="code">so <span className="keyword">what</span> <span className="keyword">are</span>, {<span className="variable">You</span>} <span className="keyword">waiting</span> <span className="string">'for?'</span>;</span>
                        </div>
                        <div className="line">
                            <span className="line-number">3</span>
                        </div>
                        <div className="line">
                            <span className="line-number">4</span>
                            <span className="code"><span className="comment">// Contact Me Here</span></span>
                        </div>
                        <div className="line">
                            <span className="line-number">5</span>
                            <span className="code"><span className="keyword">const</span> <span className="variable">email</span> = <span className="string">'pinakkundu1080@gmail.com'</span>;</span>
                        </div>
                        <div className="line">
                            <span className="line-number">6</span>
                        </div>
                        <div className="line">
                            <span className="line-number">7</span>
                            <span className="code"><span className="comment">// My Socials</span></span>
                        </div>
                        <div className="line">
                            <span className="line-number">8</span>
                            <span className="code"><span className="keyword">const</span> <span className="variable">github_username</span> = <span className="string">'pinakkk'</span>;</span>
                        </div>
                        <div className="line">
                            <span className="line-number">9</span>
                            <span className="code"><span className="keyword">const</span> <span className="variable">instagram</span> = <span className="string">'@pinakk.io'</span>;</span>
                        </div>
                        <div className="line">
                            <span className="line-number">10</span>
                        </div>
                        <div className="line">
                            <span className="line-number">11</span>
                            <span className="code"><span className="comment">// I'll be waiting for you...</span></span>
                        </div>
                        <div className="line">
                            <span className="line-number">12</span>
                            <span className="code"><span className="keyword">export</span> <span className="keyword">default</span> <span className="variable">pinak.features</span>(<span className="variable">developer</span>, <span className="variable">designer</span>);</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editor;
