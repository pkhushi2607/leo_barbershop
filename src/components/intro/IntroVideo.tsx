"use client";

import { useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";

const subscribe = () => () => {};
const serverSnapshot = () => true;
const sessionSnapshot = () => {
    try {
        return Boolean(sessionStorage.getItem("hasSeenIntro"));
    } catch {
        return false;
    }
};

export function IntroVideo() {
    const [showIntro, setShowIntro] = useState(true);

    const hasSeenIntro = useSyncExternalStore(subscribe, sessionSnapshot, serverSnapshot);

    const finishIntro = () => {
        try {
            sessionStorage.setItem("hasSeenIntro", "true");
        } catch {
            // The video can still be dismissed when session storage is unavailable.
        }
        setShowIntro(false);
    };

    return (
        <AnimatePresence>
            {showIntro && !hasSeenIntro && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="intro-overlay"
                >
                    <video
                        autoPlay
                        muted
                        playsInline
                        onEnded={finishIntro}
                        className="intro-video"
                    >
                        <source src="/video/intro_video.mp4" type="video/mp4" />
                    </video>

                    <button
                        onClick={finishIntro}
                        className="intro-skip"
                    >
                        Skip Intro →
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
