class Prezence {

    /**
     * Initialize the website
     */
    static init() {

        window.onscroll = Prezence.on_scroll
        window.onresize = Prezence.on_resize

        document.querySelector('video').play()
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