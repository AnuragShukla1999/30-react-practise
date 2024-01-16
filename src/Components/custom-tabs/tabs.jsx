import { useState } from "react"


export default function Tabs({ }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex);
        onchange(getCurrentIndex);
    }
    return (
        <div className="wrapper">
            <div className="heading">
                {tabsContent.map((tabItem, index) => (
                    <div
                        className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
                        onclick={() => handleOnClick(index)}
                        key={tabItem.label}
                    >
                        <span>{tabItem.label}</span>
                    </div>
                ))}
            </div>

            <div className="content" style={{ color: "red" }}>
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    )
}