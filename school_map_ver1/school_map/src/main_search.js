const placements = [
    {
        id: 1,
        name: "1층 배치도",
        hiddenNames: ["스마트코딩실", "상담실","3D프린팅실", "ICT 융합부", 
                       "특수학급", "EV", "엘리베이터", "행정실", "교장실", 
                       "방송실", "보건실", "시청각실", "숙직실", "운영위원회실", "인쇄실", "급식실"], 
        type: "기본적인 시설",
        url: "planner/first_floor.jpg"
    },
    {
        id: 2,
        name: "2층 배치도",
        hiddenNames: ["지구과학실", "물리실", "문화예술부", "홈베이스(여)", 
                      "정독실(1)", "1학년부", "휴게실", "EV", "홈베이스(남)", 
                      "학사행정지원부", "평가실", "정보부", "1-1", "1-2", "1-3",
                      "1-4", "1-5", "1-6", "1-7", "1-8", "학생자치회실", "학생안전부", "호연관"],  
        type: "1학년들이 사용",
        url: "planner/second_floor.jpg"
    },
    {
        id: 3,
        name: "3층 배치도",
        hiddenNames: ["화학실", "생명과학실", "창의인성부", "홈베이스(여)", 
                      "정독실(2)", "2학년부", "휴게실", "EV", "홈베이스(남)", 
                      "교실수업혁신부", "휴게실", "연구부", "공용실", "2-1", "2-2", "2-3",
                      "2-4", "2-5", "2-6", "2-7", "2-8"],
        type: "2학년들이 사용",
        url: "planner/third_floor.jpg"
    },
    {
        id: 4,
        name: "4층 배치도",
        hiddenNames: ["미술실", "문서고","영어전용실", "진로진학부", 
                      "정독실(3)", "휴게실", "EV", "엘리베이터", "수업분석실", "사회교실", 
                      "3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8", "위클래스"],  
        type: "3학년들이 사용",
        url: "planner/fourth_floor.jpg"
    },
];

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const floorSelect = document.getElementById('floorSelect');
const list = document.getElementById('list');

function showList(val = '', floor = 'none') {
    list.innerHTML = '';
    placements.forEach(placement => {
        const allNames = [placement.name, ...placement.hiddenNames].join(', ');
        const shouldInclude = allNames.toLowerCase().includes(val.toLowerCase());

        if (shouldInclude && (floor === 'none' || floor === 'all_floors' || 
            (floor === 'first_floor' && placement.id === 1) || 
            (floor === 'second_floor' && placement.id === 2) || 
            (floor === 'third_floor' && placement.id === 3) || 
            (floor === 'fourth_floor' && placement.id === 4))) {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src='${placement.url}' alt='${placement.name}'>
                <p>이름: ${placement.name}</p>
                <p>속성: ${placement.type}</p>
            `;
            list.appendChild(li);
        }
    });

    if (list.innerHTML === '') {
        const li = document.createElement('li');
        li.innerHTML = `<p>검색결과가 없습니다. 다시 시도해주세요!</p>`;
        list.appendChild(li);
    }
}

showList();

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const val = searchInput.value;
    const floor = floorSelect.value;
    showList(val, floor);
});