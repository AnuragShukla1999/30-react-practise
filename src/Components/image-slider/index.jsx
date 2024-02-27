import { useState } from "react";


export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [images, setImage] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImage(getUrl) {
        try {
            setLoading(true);

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImage(data);
                setLoading(false);
            }
        
        } catch (error) {
            setErrorMsg(error.message);
            setLoading(false);
        }
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide + 1);
    }

    function handleNext() {
        setCurrentSlide
    }
}