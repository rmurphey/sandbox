/*******************************************************************************
 *
 *  Copyright (c)  2011 Toura, LLC.	All Rights Reserved.
 *  http://toura.com
 *
 *  LICENSE: https://github.com/Toura/mulberry/blob/master/LICENSE.txt
 *
 *******************************************************************************/
dojo.provide("client.base");if(!dojo._hasResource["client.components.PageHeader"]){dojo._hasResource["client.components.PageHeader"]=true;dojo.provide("client.components.PageHeader");mulberry.component("PageHeader",{componentTemplate:dojo.cache("client.components","PageHeader/PageHeader.haml",".component.page-header\n  %hgroup\n    %h1\n      =title\n"),prep:function(){this.title=this.node?this.node.name:this.title;}});}
