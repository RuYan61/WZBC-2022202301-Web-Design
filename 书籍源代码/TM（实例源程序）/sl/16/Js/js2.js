// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}   
function v_load() {
    $$("spnPlay").innerHTML = "播放";
    $$("vdoMain").load();
}
function v_play(e) {
    if (e.innerHTML == "播放") {
        $$("vdoMain").play();
        e.innerHTML = "暂停";
    } else {
        $$("vdoMain").pause();
        e.innerHTML = "播放";
    }
}