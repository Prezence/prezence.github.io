class Prezence {

    /**
     * Initialize the website
     */
    static init() {

        window.onscroll = Prezence.on_scroll
        window.onresize = Prezence.on_resize

        let video = document.querySelector('video')
        video.onload = video.play.bind(video)
    }

    /**
     * 
     * @param { MouseEvent } ev 
     */
    static on_resize(ev) {

        // debugger
    }

    /**
     * 
     * @param { MouseEvent } ev 
     */
    static on_scroll(ev) {

        // debugger
    }
}

Prezence.init()