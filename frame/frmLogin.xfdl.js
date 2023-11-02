(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLogin");
            this.set_titletext("New Form");
            this.set_background("none repeat left top");
            this.set_visible("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","900","445","90","90",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Login");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","735","443","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","678","448","45","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("ID");
            obj.set_color("#6164f4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","670","500","45","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("패스워드");
            obj.set_color("#6164f4");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","735","501","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","101","320","539","291",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("url(\'imagerc::login2.png\') no-repeat center top");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","190","121","845","120",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("차세대 시스템");
            obj.set_font("normal bold 72px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            obj.set_color("#4aabed");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLogin.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	 nexacro.getApplication().mainframe.VFSet01.set_separatesize("65,*,30,0");
        };

        this.MaskEdit00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("frmLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
