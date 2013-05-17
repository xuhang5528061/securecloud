// JavaScript Document

//创建组织结构物对象
function Structure(structureId,structurename)
{
	this.structureId=structureId;
	this.structurename=structurename;
}

//创建告警信息对象
function Alarm(alarmId,structureId,alarmCode,alarmClass,alarmInfo)
{
	this.alarmId=alarmId;
	this.structureId=structureId;
	this.alarmCode=alarmCode;
	this.alarmClass=alarmClass;
	this.alarmInfo=alarmInfo;
}

function StringBuffer(){
    this.data = [];
}
StringBuffer.prototype.append = function(){
    this.data.push(arguments[0]);
    return this;
}
StringBuffer.prototype.toString = function(){
    return this.data.join("");
}
