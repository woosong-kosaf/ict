(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Button" :
            			{
            				"class" :
            				[
            					{
            						"btn_WF_ani" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"NanumGothic\""),
            									"border" : nexacro.BorderObject("1px solid #4169E1")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"NanumGothic\""),
            									"border" : nexacro.BorderObject("1px solid #4169E1")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"NanumGothic\""),
            									"border" : nexacro.BorderObject("1px solid #4169E1")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #214cce")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #214cce")
            								}
            							}
            						}
            					}
            				]
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();

	};
}
)();
