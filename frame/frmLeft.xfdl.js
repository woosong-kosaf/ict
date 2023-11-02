(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fm_left");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(190,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grdLeft","0","40","190",null,null,"418",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gdsLeftMenu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_cssclass("grd_LF_treeMenu");
            obj.set_treeinitstatus("expand,all");
            obj.set_border("0px solid #c7c7c7,1px solid #c7c7c7");
            obj.set_background("transparent");
            obj.set_color("transparent");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","190","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Main Title Menu");
            obj.set_cssclass("sta_LF_title01");
            this.addChild(obj.name, obj);

            obj = new Button("rain","0","680","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("비도오고그래서");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","110","679","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::vtile.png\') repeat center top");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","130","679","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("url(\'imagerc::htile.png\') repeat center top");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","150","680","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("url(\'imagerc::tile.png\') repeat left top");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03","170","680","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("url(\'imagerc::close.png\') repeat center top");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",190,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLeft.xfdl", function() {
        this.application = null;

        this.fm_left_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();


        };

        this.divLeft_grdLeft_oncellclick = function(obj,e)
        {
        	var sMenuId = this.application.gdsLeftMenu.getColumn(e.row, "MENU_CD");

        	this.fn_openMenu(sMenuId);
        };

        var idx = 0

        this.fn_openMenu = function(sMenuId)
        {


        	var objMdiFrame = this.application.MdiFrame;
        	var objWorkFrame = this.application.WorkFrame;

        	//추가

        	if (idx == 0) {
        	this.addChild("framesetNew",objWorkFrame);
        	idx = idx + 1;
        	}
        	else {

        	}

        	var nFRow;
        	var sPGMPATH;
        	var sPGMID;

        	var nFRowOpen;
        	var sWinId;
        	var sMenuNm;
        	var sMenuNavi;

        	var objMenuDs = this.application.gdsLeftMenu;
        	var objOpenMenuDs = this.application.gdsOpenMenu;

        	nFRow 		= objMenuDs.findRow("MENU_CD", sMenuId);
        	sPGMPATH 	= objMenuDs.getColumn(nFRow, "PGM_PATH");
        	sPGMID 		= objMenuDs.getColumn(nFRow, "PGM_ID")
        	sMenuNm 	= objMenuDs.getColumn(nFRow, "MENU_NM");

        	nFRowOpen = objOpenMenuDs.findRow("MENU_CD", sMenuId);
        	sWinId = objOpenMenuDs.getColumn(nFRowOpen, "WINID");

        	if (nFRow==-1)
        	{
        		alert("Menu가 존재하지 않습니다.");
        		return;

        	}else if(this.gfnIsNull(sPGMPATH)==true)
        	{
        		return;
        	}

        	if(nFRowOpen>-1)
        	{
        		objMdiFrame.form.fn_ActiveTabPage(sWinId);
        		return;
        	}

        	if(objOpenMenuDs.rowcount > 12)
        	{
        		alert("메뉴는  8개이상 오픈할 수 없습니다.");
        		return;
        	}

        	sWinId = sMenuId + "_" + objOpenMenuDs.rowcount+ "_" + parseInt(Math.random() * 100);

        	var oParam = { FORM_ID : sWinId,
                           MENU_NM : sMenuNm,
                           FORM_URL : sPGMPATH+"::"+sPGMID
        				   };


        	var objChildFrame = new ChildFrame();
        	objChildFrame.init(sWinId, 0, 0, null, null, 0, 0);
        	//objWorkFrame.addChild(objChildFrame.name, objChildFrame);
        	this.framesetNew.addChild(sWinId, objChildFrame);

        	objChildFrame.param = oParam;
        	objChildFrame.set_resizable(true);
        	objChildFrame.set_showtitlebar(true);

        	//외부라인과 타이틀바 제목 설정
        	objChildFrame.set_border("1px solid blue");
        	objChildFrame.set_titletext(sMenuNm);

         	//objChildFrame.set_openstatus("maximize");
        	objChildFrame.set_formurl("frame::frmWork.xfdl");
        	objChildFrame.show();



        	objMdiFrame.form.fn_AddTabPage(sWinId, sMenuNm);

        	this.fn_AddOpenMenu(sWinId, sMenuId, sMenuNm);

        	objMdiFrame.form.fn_ActiveTabPage(sWinId);
        }

        /*****************************************************************************
        함 수 명 칭 : gfnAddOpenMenu
        함 수 설 명 : 열린화면리스트 저장
        파 라 미 터 : pvWinId – 업무화면 ID
        			   pvMenuCd – 메뉴코드
        			   pvMenuNm – 메뉴명
        리 턴 내 용 : 없음
        *****************************************************************************/
        this.fn_AddOpenMenu = function(pvWinId, pvMenuCd, pvMenuNm)
        {
        	var objOpenMenuDs = this.application.gdsOpenMenu;

        	var nAddRow = objOpenMenuDs.addRow();
        	objOpenMenuDs.setColumn(nAddRow, "WINID", pvWinId);
        	objOpenMenuDs.setColumn(nAddRow, "MENU_CD", pvMenuCd);
        	objOpenMenuDs.setColumn(nAddRow, "MENU_NM", pvMenuNm);
        }

        /*****************************************************************************
        함 수 명 칭 : gfnDelOpenMenu
        함 수 설 명 : 열린화면리스트 삭제
        파 라 미 터 : pvWinId – 업무화면 ID
        리 턴 내 용 : 없음
        *****************************************************************************/
        this.fn_DelOpenMenu = function(pvWinId)
        {
        	var objOpenMenuDs = this.application.gdsOpenMenu;

        	var nRow = objOpenMenuDs.findRow("WINID", pvWinId);

        	objOpenMenuDs.deleteRow(nRow);
        }

        /*****************************************************************************
        함 수 명 칭 : gfnIsNull
        함 수 설 명 : 입력값 Null 체크 함수
        파 라 미 터 : pvVal – 입력값
        리 턴 내 용 : true/false 값이 Null일 경우 true
        *****************************************************************************/
        this.gfnIsNull = function (pvVal)
        {
        	if (new String(pvVal).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (pvVal == null)
        	{
        		return true;
        	}
        	if (("x" + pvVal == "xNaN") && (new String(pvVal.length).valueOf() == "undefined"))
        	{
        		return true;
        	}
        	if (pvVal.length == 0)
        	{
        		return true;
        	}

        	return false;
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.framesetNew.arrange("vertical");
        };

        this.rain_onclick = function(obj,e)
        {
        // canvas 동적 생성(Dom 접근)
        	var canvas = document.createElement('canvas');
        	this._control_element.getContainerElement().handle.appendChild(canvas);
        	var canvasSelector = document.querySelector('canvas');
        	canvasSelector.width = window.innerWidth;
        	canvasSelector.height = window.innerHeight;
        	var ctx = canvas.getContext('2d');

        	// 눈덩이 개수
        	var total = 900;
        	// 눈덩이를 담을 배열
        	var petalArray = [];


        	// 이미지 호출
        	var petalImg = new Image();
        	// Generate 파일 경로
        	//petalImg.src = './_resource_/_images_/img_main_icon01.png';
        	petalImg.src = './_resource_/_images_/img_WF_down01.png';


        	// 이미지가 정상적으로 로딩이 되고나서 array 반복
        	petalImg.onload = () => {
        		for(var i = 0; i < total; i++) {
        			// 배열에 클래스 생성
        			petalArray.push(new Petal());

        		}
        		render();

        		// window 창 크기 변환이 발생 시 resize
        		window.addEventListener('resize', () => {
        				canvas.width = window.innerWidth;
        				canvas.height = window.innerHeight;
        			});
        	}



        	// 재귀 함수로 무한 반복
        	function render() {
        		// canvas의 전체영역을 지움
        		ctx.clearRect(0, 0, canvas.width, canvas.height);
        		// 애니메이션 실행
        		petalArray.forEach(petal => {
        				petal.animate();
        			});
        		// 애니메이션 업데이트
        		window.requestAnimationFrame(render);
        	}



        	// 눈송이 클래스
        	class Petal {
        		constructor() {
        			// 좌표 랜덤 값
        			this.x = Math.random() * canvas.width + 1;
        			this.y = Math.random() * canvas.height * 2 - canvas.height;
        			// 눈덩이 크기 랜덤
        			this.w = 2 + Math.random() * 8;
        			this.h = this.w;
        			// 눈덩이 투명도 조절
        			//this.opacity = this.w / 20;
        			// 떨어지는 속도
        			this.ySpeed = 12 + Math.random() * 5;
        		}


        		// 그리기
        		draw() {
        			// 눈덩이의 x 또는 y 좌표가 현재 창을 넘을 때
        			if (this.x > canvas.width || this.y > canvas.height) {
        				// y축에 눈덩이를 미리 랜덤 생성
        				this.y = -Math.random() * canvas.height * 2 - canvas.height;
        				// 새로 생성된 눈덩이가 떨어지는 속도
        				this.ySpeed = 12 + Math.random();
        			}

        			// 투명도
        			ctx.globalAlpha = this.opacity;
        			// 이미지를 캔버스에 그림
        			// drawImage(이미지, 시작하는 위치x, 시작하는 위치 y, 이미지 크기 가로px, 이미지 크기 세로px)
        			ctx.drawImage(petalImg, this.x, this.y, this.w, this.h);
        		}


        		// 애니메이션 효과
        		animate() {
        			// 위에서 아래로 이미지 움직이기
        			//this.x += 1;
        			this.y += this.ySpeed;
        			// canvas 그리기
        			this.draw();
        		}
        	}
        };

        this.ImageViewer00_onclick = function(obj,e)
        {
        	this.framesetNew.arrange("vertical");
        };

        this.ImageViewer01_onclick = function(obj,e)
        {
        	this.framesetNew.arrange("horizontal");
        };

        this.ImageViewer02_onclick = function(obj,e)
        {
        	this.framesetNew.arrange("cascade");
        };

        this.ImageViewer03_onclick = function(obj,e)
        {

        	var WorkFrame = this.application.WorkFrame.all;
        	for(var i=WorkFrame.length-1; i>=0; i--)
        	{
        		WorkFrame[i].form.close();
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fm_left_onload,this);
            this.grdLeft.addEventHandler("oncellclick",this.divLeft_grdLeft_oncellclick,this);
            this.rain.addEventHandler("onclick",this.rain_onclick,this);
            this.ImageViewer00.addEventHandler("onclick",this.ImageViewer00_onclick,this);
            this.ImageViewer01.addEventHandler("onclick",this.ImageViewer01_onclick,this);
            this.ImageViewer02.addEventHandler("onclick",this.ImageViewer02_onclick,this);
            this.ImageViewer03.addEventHandler("onclick",this.ImageViewer03_onclick,this);
        };
        this.loadIncludeScript("frmLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
