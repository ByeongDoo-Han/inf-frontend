import React, {useRef, useState, useEffect} from "react";
import axios from "axios";

function English() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// 데이터 요청
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8080/api/v1/eng/1"
				);
				setData(response.data); // 서버에서 받은 데이터 저장
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetchData();
	}, []); // 빈 배열로 설정하면 컴포넌트가 마운트될 때만 실행

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			<p>{data.korSen}</p>
			<p>{data.engSen}</p>
		</div>
	);
}
export default English;
