var Experigen =  {
	settings: {

		experimentName: "duaflch2359noAlt", // use only A-Z, a-z, 0-9
		
		databaseServer: "https://sdb.phonologist.org/experigen1/",
		recorderServer: "https://sdb.phonologist.org/audio/upload.php",

		online: true, // make sure you know what you're doing before changing this
		
		strings: {
			windowTitle:     "뜌어링구",
			connecting:		 "연결 중...",
			loading:         "불러오는 중...",
			soundButton:     "    ►    ",
			continueButton:  "   진행   ",
			errorMessage:    "오류가 발생했습니다. 불편을 드리어 죄송합니다.",
			emptyBoxMessage: "답변을 입력해 주세요.",
			
			recordButton : "녹음",
			stopButton : "정지",
			sentButton : "저장",
			tryagainButton: "삭제",
			uploadSuccessful : "저장 완료! ✔︎",
			uploading : "저장 중...",
			recording : "녹음 중...",
			processing: "처리 중..."
		},
		
		audio: true,
		
		progressbar: {
			visible: true, 
			adjustWidth: 6,
			percentage: false
		},
		
		items: "resources/items.txt",
		
		
		otherresources: {
			frames: "resources/frames.txt",
			pictures: "resources/train.txt",
		},

		folders: {
			views: "views/",
			sounds: "resources/sounds/",
			pictures: "resources/pictures/"
		},
	
		footer: "views/footer.html",
		missingview: "views/missingview.ejs"
	}	
};




