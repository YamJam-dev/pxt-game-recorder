let recording = false
let currentFrame: Image
//% color="#8a00ca"
namespace record {
    //% block="play video $video on %displayer"
    //% video.defl=myVideo
    //% video.shadow=variables_get
    //% displayer.defl=myScreen
    //% displayer.shadow=variables_get
    export function play_video(video: Image[], displayer: Sprite) {
        animation.runImageAnimation(
            displayer,
            video,
            16,
            false
            
        )
    }

    //% block="start recording for $video"
    //% video.defl=myVideo
    //% video.shadow=variables_get
    export function start_recording(video: Image[]) {
        if (recording == false) {
            
        
            recording = true
            control.runInParallel(function () {
                while (recording) {
                currentFrame = image.screenImage().clone()
                video.push(currentFrame)
                pause(16)
                }
            })
        }
    }

    //% block="stop recording video"

    export function stop_recording() {
        recording = false
    }
}
