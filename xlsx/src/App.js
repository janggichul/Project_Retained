import "./App.css";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import price from "./img/price.jpeg";
import price1 from "./img/price1.jpeg";

const ReactExcelDownload = () => {
  const data = [
    {
      id: 1,
      title: "백화수복 1800ml",
      quantity: Number(8),
      price: Number(11000),
      totalPrice: Number(11000) * Number(8),
    },
    {
      id: 2,
      title: "백화수복 700ml",
      quantity: Number(12),
      price: Number(6500),
      totalPrice: Number(12) * Number(6500),
    },
    {
      id: 3,
      title: "헤이루 미용티슈 득템 3입",
      quantity: Number(2),
      price: Number(5100),
      totalPrice: Number(2) * Number(5100),
    },
    {
      id: 4,
      title: "헤이루 김득템 16봉",
      quantity: Number(3),
      price: Number(5100),
      totalPrice: Number(2) * Number(5100),
    },
    {
      id: 5,
      title: "버터링 딥초코 ",
      quantity: Number(10),
      price: Number(3000),
      totalPrice: Number(10) * Number(3000),
    },
    {
      id: 6,
      title: "홈런볼 46g",
      quantity: Number(6),
      price: Number(1700),
      totalPrice: Number(6) * Number(1700),
    },
    {
      id: 7,
      title: "커스타드 홈런볼",
      quantity: Number(4),
      price: Number(1700),
      totalPrice: Number(4) * Number(1700),
    },
    {
      id: 8,
      title: "홈런볼바나나스플릿",
      quantity: Number(2),
      price: Number(2000),
      totalPrice: Number(2) * Number(2000),
    },
    {
      id: 9,
      title: "초코송이",
      quantity: Number(3),
      price: Number(1000),
      totalPrice: Number(3) * Number(1000),
    },
    {
      id: 10,
      title: "초코나무숲 웨하스",
      quantity: Number(6),
      price: Number(2200),
      totalPrice: Number(6) * Number(2200),
    },
    {
      id: 11,
      title: "포켓웨하스 초코",
      quantity: Number(14),
      price: Number(800),
      totalPrice: Number(14) * Number(800),
    },
    {
      id: 12,
      title: "롯데칸초",
      quantity: Number(15),
      price: Number(1200),
      totalPrice: Number(15) * Number(1200),
    },
    {
      id: 13,
      title: "닭다리 후라이드",
      quantity: Number(10),
      price: Number(1700),
      totalPrice: Number(10) * Number(1700),
    },
    {
      id: 14,
      title: "고래밥 볶음양념",
      quantity: Number(6),
      price: Number(800),
      totalPrice: Number(6) * Number(800),
    },
    {
      id: 15,
      title: "초코픽",
      quantity: Number(5),
      price: Number(1700),
      totalPrice: Number(5) * Number(1700),
    },
    {
      id: 15,
      title: "칸초컵",
      quantity: Number(4),
      price: Number(2500),
      totalPrice: Number(4) * Number(2500),
    },
    {
      id: 16,
      title: "ABC초코쿠키",
      quantity: Number(4),
      price: Number(1200),
      totalPrice: Number(4) * Number(1200),
    },
    {
      id: 17,
      title: "ABC초코쿠키 쿠앤크",
      quantity: Number(3),
      price: Number(1200),
      totalPrice: Number(3) * Number(1200),
    },
    {
      id: 18,
      title: "와클어니언바게트",
      quantity: Number(4),
      price: Number(1500),
      totalPrice: Number(4) * Number(1500),
    },
    {
      id: 19,
      title: "초코홈런볼 128g",
      quantity: Number(1),
      price: Number(4500),
      totalPrice: Number(1) * Number(4500),
    },
    {
      id: 20,
      title: "오트밀 미니 바이트",
      quantity: Number(2),
      price: Number(4500),
      totalPrice: Number(2) * Number(4500),
    },
    {
      id: 21,
      title: "오트밀 치즈 바이트",
      quantity: Number(2),
      price: Number(4500),
      totalPrice: Number(2) * Number(4500),
    },
    {
      id: 22,
      title: "찹쌀선과",
      quantity: Number(3),
      price: Number(3000),
      totalPrice: Number(3) * Number(3000),
    },
    {
      id: 23,
      title: "빼빼로누드",
      quantity: Number(1),
      price: Number(1700),
      totalPrice: Number(1) * Number(1700),
    },
    {
      id: 24,
      title: "빼빼로아몬드",
      quantity: Number(3),
      price: Number(1700),
      totalPrice: Number(3) * Number(1700),
    },
    {
      id: 24,
      title: "빼빼로초코",
      quantity: Number(4),
      price: Number(1700),
      totalPrice: Number(4) * Number(1700),
    },
    {
      id: 25,
      title: "빼빼로크런키",
      quantity: Number(4),
      price: Number(1700),
      totalPrice: Number(4) * Number(1700),
    },
    {
      id: 26,
      title: "빼빼로화이트",
      quantity: Number(4),
      price: Number(1700),
      totalPrice: Number(4) * Number(1700),
    },
    {
      id: 27,
      title: "포키",
      quantity: Number(2),
      price: Number(1700),
      totalPrice: Number(2) * Number(1700),
    },
    {
      id: 28,
      title: "포키극세",
      quantity: Number(3),
      price: Number(1700),
      totalPrice: Number(2) * Number(1700),
    },
    {
      id: 29,
      title: "다이제초코",
      quantity: Number(3),
      price: Number(2500),
      totalPrice: Number(3) * Number(2500),
    },
    {
      id: 30,
      title: "다이제",
      quantity: Number(3),
      price: Number(2000),
      totalPrice: Number(3) * Number(2000),
    },
    {
      id: 31,
      title: "촉촉한초코칩",
      quantity: Number(1),
      price: Number(2400),
      totalPrice: Number(1) * Number(2400),
    },
    {
      id: 32,
      title: "오레오 웨하스 초코",
      quantity: Number(4),
      price: Number(3000),
      totalPrice: Number(4) * Number(3000),
    },
    {
      id: 33,
      title: "빈츠",
      quantity: Number(5),
      price: Number(2800),
      totalPrice: Number(5) * Number(2800),
    },
    {
      id: 34,
      title: "칙촉",
      quantity: Number(6),
      price: Number(2400),
      totalPrice: Number(6) * Number(2400),
    },
    {
      id: 35,
      title: "칙촉스크릿",
      quantity: Number(8),
      price: Number(2000),
      totalPrice: Number(8) * Number(2000),
    },
    {
      id: 36,
      title: "헤이루 시리얼 득템",
      quantity: Number(5),
      price: Number(3200),
      totalPrice: Number(5) * Number(3200),
    },
    {
      id: 37,
      title: "헤이루 미용티슈 득템 3입",
      quantity: Number(2),
      price: Number(5100),
      totalPrice: Number(2) * Number(5100),
    },
    {
      id: 38,
      title: "베리베리스트로베리큐브 52g",
      quantity: Number(4),
      price: Number(2000),
      totalPrice: Number(4) * Number(2000),
    },
    {
      id: 39,
      title: "큐브탱키위젤리",
      quantity: Number(5),
      price: Number(1800),
      totalPrice: Number(5) * Number(1800),
    },
    {
      id: 40,
      title: "헤이루 쌀밥 득템 6입",
      quantity: Number(3),
      price: Number(7200),
      totalPrice: Number(3) * Number(7200),
    },
    {
      id: 41,
      title: "모기향 10개",
      quantity: Number(1),
      price: Number(3000),
      totalPrice: Number(1) * Number(2000),
    },
    {
      id: 42,
      title: "박카스F 10입",
      quantity: Number(1),
      price: Number(9000),
      totalPrice: Number(3) * Number(9000),
    },
    {
      id: 43,
      title: "비타500병 100ml 10입",
      quantity: Number(1),
      price: Number(10000),
      totalPrice: Number(3) * Number(10000),
    },
    {
      id: 44,
      title: "비타1000플러스병 10입",
      quantity: Number(1),
      price: Number(12000),
      totalPrice: Number(3) * Number(12000),
    },
    {
      id: 45,
      title: "제로초콜릿칩쿠키",
      quantity: Number(8),
      price: Number(2800),
      totalPrice: Number(4) * Number(2800),
    },
    {
      id: 46,
      title: "초코칩쿠키",
      quantity: Number(5),
      price: Number(1500),
      totalPrice: Number(5) * Number(1500),
    },
    {
      id: 47,
      title: "초콜릿무스큐브",
      quantity: Number(3),
      price: Number(2000),
      totalPrice: Number(3) * Number(2000),
    },
    {
      id: 50,
      title: "라면득템",
      quantity: Number(1),
      price: Number(1900),
      totalPrice: Number(1) * Number(1900),
    },
    {
      id: 51,
      title: "롤티슈득템",
      quantity: Number(1),
      price: Number(1700),
      totalPrice: Number(1) * Number(1700),
    },
    {
      id: 52,
      title: "나무의자",
      quantity: Number(4),
      price: Number(66780),
      totalPrice: Number(4) * Number(66780),
      url: "http://itempage3.auction.co.kr/DetailView.aspx?ItemNo=D224286304&frm3=V2",
    },
    {
      id: 53,
      title: "나무테이블",
      quantity: Number(1),
      price: Number(107800),
      totalPrice: Number(1) * Number(107800),
      url: "https://smartstore.naver.com/dongbang95/products/4806349283?NaPm=ct%3Dlkrmz1jk%7Cci%3Df164b205672bd5080db6fb25708e4adf7d99973b%7Ctr%3Dslsl%7Csn%3D957209%7Chk%3Deb8dbf2f9cba88d307170015bdbdd21f2b30424f",
    },
  ];

  const data1 = [
    {
      id: 1,
      title: "토",
      quantity: "2023년 6월 17일",
      price: Number(464100),
    },
    {
      id: 2,
      title: "토",
      quantity: "2023년 6월 24일",
      price: Number(419250),
    },
    {
      id: 3,
      title: "토",
      quantity: "2023년 7월 1일",
      price: Number(497690),
    },
    {
      id: 4,
      title: "토",
      quantity: "2023년 7월 8일",
      price: Number(571350),
    },
    {
      id: 5,
      title: "토",
      quantity: "2023년 7월 15일",
      price: Number(404900),
    },
    {
      id: 6,
      title: "토",
      quantity: "2023년 7월 22일",
      price: Number(486250),
    },
    {
      id: 7,
      title: "토",
      quantity: "2023년 7월 29일",
      price: Number(351230),
    },
  ];

  const excelFileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const excelFileExtension = ".xlsx";
  const excelFileName = "상품피해현황";

  const excelDownload = excelData => {
    const ws = XLSX.utils.aoa_to_sheet([
      [`생성_React_xlsx`],
      [],
      ["합계_1,055,820"],
      ["상품이름", "수량", "가격", "총 가격"],
    ]);
    excelData.map(data => {
      XLSX.utils.sheet_add_aoa(ws, [[data.title, data.quantity, data.price, data.totalPrice, data.url]], {origin: -1});
      ws["!cols"] = [
        {
          wpx: 200,
          alignment: {
            horizontal: "center",
          },
        },
        {
          wpx: 100,
          alignment: {
            horizontal: "center",
          },
        },
        {
          wpx: 150,
          alignment: {
            horizontal: "center",
          },
        },
        {
          wpx: 150,
          alignment: {
            horizontal: "center",
          },
        },
      ];
      return false;
    });
    const wb = {Sheets: {data: ws}, SheetNames: ["data"]};
    const excelButter = XLSX.write(wb, {bookType: "xlsx", type: "array"});
    const excelFile = new Blob([excelButter], {type: excelFileType});
    FileSaver.saveAs(excelFile, excelFileName + excelFileExtension);
  };

  const excelFileName1 = "영업손해액";

  const excelDownload1 = excelData => {
    const ws = XLSX.utils.aoa_to_sheet([
      [`생성_React_xlsx`],
      [],
      ["7월 토요일 일매출 평균 49만원 / 공사일(29일) 매출 35만원"],
      ["영업손해액_14만원"],
      ["요일", "일자", "판매금액"],
    ]);
    excelData.map(data1 => {
      XLSX.utils.sheet_add_aoa(ws, [[data1.title, data1.quantity, data1.price, data1.totalPrice]], {origin: -1});
      ws["!cols"] = [
        {
          wpx: 100,
          alignment: {
            horizontal: "center",
          },
        },
        {
          wpx: 100,
          alignment: {
            horizontal: "center",
          },
        },
        {
          wpx: 150,
          alignment: {
            horizontal: "center",
          },
        },
        {
          wpx: 150,
          alignment: {
            horizontal: "center",
          },
        },
      ];
      return false;
    });
    const wb = {Sheets: {data: ws}, SheetNames: ["data"]};
    const excelButter = XLSX.write(wb, {bookType: "xlsx", type: "array"});
    const excelFile = new Blob([excelButter], {type: excelFileType});
    FileSaver.saveAs(excelFile, excelFileName1 + excelFileExtension);
  };

  return (
    <div class="w-full h-screen bg-gray-100 pt-8">
      <div class="bg-white p-3 max-w-md mx-auto">
        <div class="text-center">
          <h1 class="text-3xl font-bold">Shared case</h1>
          <div class="mt-4 flex justify-center">
            <h1 class="w-80  border-b-2 border-gray-500 text-black" type="text" placeholder="Enter your task here">
              CU용인천덕산로점 상품피해현황 공유의 건
            </h1>
          </div>
        </div>
        <div class="mt-8">
          <ul>
            <li class="p-2 rounded-lg">
              <div class="flex align-middle flex-row justify-between">
                <div class="p-2">
                  <input type="checkbox" class="h-6 w-6 " value="true" checked />
                </div>
                <div class="p-2">
                  <p class="text-lg text-gray-800">상품피해현황</p>
                </div>
                <button class="flex text-green-500 border-2 border-green-500 p-2 rounded-lg">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 -3 22 22"
                    height="25px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    ></path>
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"></path>
                  </svg>
                  <button onClick={() => excelDownload(data)}>Download</button>
                </button>
              </div>
              <hr class="mt-2" />
            </li>
            <li class="p-2 rounded-lg">
              <div class="flex align-middle flex-row justify-between">
                <div class="p-2">
                  <input type="checkbox" class="h-6 w-6 " value="true" checked />
                </div>
                <div class="p-2">
                  <p class="text-lg text-gray-800">영업손해액</p>
                </div>
                <button class="flex text-green-500 border-2 border-green-500 p-2 rounded-lg">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 -3 22 22"
                    height="25px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    ></path>
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"></path>
                  </svg>
                  <button onClick={() => excelDownload1(data1)}>Download</button>
                </button>
              </div>
              <hr class="mt-2" />
            </li>
            <li class="p-2 rounded-lg">
              <div class="flex align-middle flex-row justify-between">
                <div class="p-2">
                  <input type="checkbox" class="h-6 w-6 " value="true" checked />
                </div>
                <div class="p-2">
                  <p class="text-lg text-gray-800">상품가_1</p>
                </div>
                <button class="flex text-green-500 border-2 border-green-500 p-2 rounded-lg">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 -3 22 22"
                    height="25px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    ></path>
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"></path>
                  </svg>
                  <a href={price} download>
                    Download
                  </a>
                </button>
              </div>
              <hr class="mt-2" />
            </li>
            <li class="p-2 rounded-lg">
              <div class="flex align-middle flex-row justify-between">
                <div class="p-2">
                  <input type="checkbox" class="h-6 w-6 " value="true" checked />
                </div>
                <div class="p-2">
                  <p class="text-lg text-gray-800">상품가_2</p>
                </div>
                <button class="flex text-green-500 border-2 border-green-500 p-2 rounded-lg">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 -3 22 22"
                    height="25px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    ></path>
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"></path>
                  </svg>
                  <a href={price1} download>
                    Download
                  </a>
                </button>
              </div>
              <hr class="mt-2" />
            </li>
          </ul>
        </div>
        <div class="mt-8">
          {/* <button class="border-2 border-red-500 p-2 text-red-500">Clear Completed Task</button>
          <button class="border-2 border-indigo-500 p-2 text-indigo-500 ml-4">Reset Todo List</button> */}
        </div>
      </div>
    </div>
    // <div>
    //   <button onClick={() => excelDownload(data)}>엑셀 다운로드</button>
    // </div>
  );
};

export default ReactExcelDownload;
