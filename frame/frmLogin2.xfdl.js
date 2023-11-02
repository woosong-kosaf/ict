(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLogin2");
            this.set_titletext("New Form");
            this.set_background("#1a61af");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","501","111","270","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::kosaf.png\')");
            obj.set_border("0px none");
            obj.set_background("#1a61af");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","505","212","120","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사번");
            obj.set_font("normal 700 20pt/normal \"Arial\"");
            obj.set_color("#e0e0e0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","500","310","120","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("패스워드");
            obj.set_font("normal 700 20pt/normal \"Arial\"");
            obj.set_color("#e0e0e0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","512","256","265","51",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("#ffffff");
            obj.set_background("#b3d2f3");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","515","350","265","51",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("#ffffff");
            obj.set_background("#b3d2f3");
            obj.set_password("true");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("frmLogin2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
