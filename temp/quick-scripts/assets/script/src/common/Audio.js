(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/src/common/Audio.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '93dbacx8/BIXbSSLGgvxCo0', 'Audio', __filename);
// script/src/common/Audio.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResourcesManager_1 = require("../manager/ResourcesManager");
var Audio = function () {
    function Audio(bgVolume, bgAudioID) {
        this.bgVolume = 1.0;
        this.sfxVolume = 1.0;
        this.bgAudioID = -1;
        this.bgVolume = bgVolume;
        this.bgAudioID = bgAudioID;
        this.init();
    }
    Audio.prototype.init = function () {};
    Audio.prototype.playBGM = function (url) {
        if (this.bgAudioID >= 0) {
            cc.audioEngine.stop(this.bgAudioID);
        }
        this.bgAudioID = cc.audioEngine.play(ResourcesManager_1.ResourcesManager.getSound(url), true, this.bgVolume);
    };
    Audio.prototype.playSFX = function (url, sfxVolume) {
        if (this.sfxVolume > 0) {
            cc.audioEngine.play(ResourcesManager_1.ResourcesManager.getSound(url), false, sfxVolume);
        }
    };
    Audio.prototype.changeBGMVolume = function (volume, force) {
        if (this.bgAudioID >= 0) {
            if (volume > 0 && cc.audioEngine.getState(this.bgAudioID) === cc.audioEngine.AudioState.PAUSED) {
                cc.audioEngine.resume(this.bgAudioID);
            } else if (volume == 0) {
                cc.audioEngine.pause(this.bgAudioID);
            }
        }
        if (this.bgVolume != volume || force) {
            cc.sys.localStorage.setItem("bgVolume", volume.toString());
            this.bgVolume = volume;
            cc.audioEngine.setVolume(this.bgAudioID, volume);
        }
    };
    Audio.prototype.changeSFXVolume = function (volume) {
        if (this.sfxVolume != volume) {
            cc.sys.localStorage.setItem("sfxVolume", volume.toString());
            this.sfxVolume = volume;
        }
    };
    Audio.prototype.getState = function () {
        return cc.audioEngine.getState(this.bgAudioID);
    };
    Audio.prototype.pauseAll = function () {
        cc.audioEngine.pauseAll();
    };
    Audio.prototype.resumeAll = function () {
        cc.audioEngine.resumeAll();
    };
    return Audio;
}();
exports.Audio = Audio;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Audio.js.map
        