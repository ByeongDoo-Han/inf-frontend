import React, {useMemo, useRef, useState, useEffect} from "react";
import axios from "axios";
import WordButton from "./components/WordButton";
import "../styles/English.css";
import Header from "./components/Header";

const English = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [answerList, setAnswerList] = useState([]);
	const [answer, setAnswer] = useState();
	const [isCorrect, setIsCorrect] = useState(false);
	const maxPages = 7;
	const [id, setId] = useState(1);
	// const shuffledList = useMemo(() => {
	// 	return data.engSenList
	// 		? Object.values(data.engSenList).sort(() =>
	// 				Math.floor(Math.random() - 0.5)
	// 			)
	// 		: [];
	// }, [data.engSenList]); // ✅ 데이터가 변경될 때만 다시 섞음
	const putAnswer = (value) => {
		setAnswerList((prevItem) => {
			const newItem = prevItem.includes(value)
				? prevItem.filter((i) => i !== value) // 제거
				: [...prevItem, value]; // 추가
			// console.log(prevItem.engSenList.indexOf(newItem));
			return newItem;
		});
	};

	useEffect(() => {
		setData([]);
		setLoading(true);
		setError(null);
		setAnswerList([]);
		setIsCorrect(false);
		setId(Math.floor(Math.random() * maxPages) + 1); // ���기 id
		// 데이터 요청
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:8080/api/v1/eng/${id}`
				);
				// console.log(response.data);
				setData(response.data); // 서버에서 받은 데이터 저장
				setAnswer(response.data.engSen); //
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

	const goToRandomPage = () => {
		const randomId = Math.floor(Math.random() * maxPages) + 1;
		setId(randomId);
	};

	useEffect(() => {
		const currentSentence = answerList.join(" ");
		setIsCorrect(currentSentence === answer);
	}, [answerList]); // selectedWords가 변경될 때마다 실행

	useEffect(() => {
		console.log(isCorrect);
		if (isCorrect) {
			goToRandomPage(); // ✅ 정답이 맞으면 즉시 alert 실행
		}
	}, [isCorrect, id]); // ✅ isCorrect가 변경될 때 실행

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;
	return (
		<div className="quiz-container">
			<div className="quiz-sentence">
				<p>{data.korSen}</p>
				{/* {shuffledList} */}
				{data.engSenList.map((value) => (
					<WordButton
						size="large"
						label={value}
						onClick={() => putAnswer(value)}
					/>
				))}
				<p>{answerList.join(" ")}</p>
			</div>
		</div>
	);
};
export default English;
