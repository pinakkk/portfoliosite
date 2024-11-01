import React from 'react';
import './css/Editor.css';

const Editor = () => {
    return (
        <div className="app-container">
            <div className="editor-window">
                <div className="title-bar">
                    <div className="title-bar-buttons">
                        <div className="title-bar-button button-close"></div>
                        <div className="title-bar-button button-minimize"></div>
                        <div className="title-bar-button button-maximize"></div>
                    </div>
                    <div className="title-bar-title"></div>
                </div>
                <div className="editor-content">
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
                    <div className="code-editor">
                        <div className="line">
                            <span className="line-number">1</span>
                            <span className="code-content"><span className="comment">//...</span></span>
                        </div>
                        <div className="line">
                            <span className="line-number">2</span>
                            <span className="code-content">so <span className="keyword">what</span> <span className="keyword">are</span>, {<span className="variable">You</span>} <span className="keyword">waiting</span> <span className="string">'for?'</span>;</span>
                        </div>
                        <div className="line">
                            <span className="line-number">3</span>
                        </div>
                        <div className="line">
                            <span className="line-number">4</span>
                            <span className="code-content"><span className="comment">// Contact Me Here</span></span>
                        </div>
                        <div className="line">
                            <span className="line-number">5</span>
                            <span className="code-content"><span className="keyword">const</span> <span className="variable">email</span> = <span className="string">'pinakkundu1080@gmail.com'</span>;</span>
                        </div>
                        <div className="line">
                            <span className="line-number">6</span>
                        </div>
                        <div className="line">
                            <span className="line-number">7</span>
                            <span className="code-content"><span className="comment">// My Socials</span></span>
                        </div>
                        <div className="line">
                            <span className="line-number">8</span>
                            <span className="code-content"><span className="keyword">const</span> <span className="variable">github_username</span> = <span className="string">'pinakkk'</span>;</span>
                        </div>
                        <div className="line">
                            <span className="line-number">9</span>
                            <span className="code-content"><span className="keyword">const</span> <span className="variable">instagram</span> = <span className="string">'@pinakk.io'</span>;</span>
                        </div>
                        <div className="line">
                            <span className="line-number">10</span>
                        </div>
                        <div className="line">
                            <span className="line-number">11</span>
                            <span className="code-content"><span className="comment">// I'll be waiting for you...</span></span>
                        </div>
                        <div className="line">
                            <span className="line-number">12</span>
                            <span className="code-content"><span className="keyword">export</span> <span className="keyword">default</span> <span className="variable">pinak.features</span>(<span className="variable">developer</span>, <span className="variable">designer</span>);</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editor;
