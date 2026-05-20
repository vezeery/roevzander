import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../globals.css";


export default function Entertainment() {
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen py-12 text-white md:px-8">
                <h1 className="py-48 text-6xl">QUEST</h1>
            </div>

            <div className="flex items-center justify-center text-white min-h-px md:px-8">
                <div className="grid items-center w-full max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
                </div>
            </div>

            <div className="w-full min-h-screen px-4 pt-24 pb-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="p-6 rounded-lg card">
                        <div className="flex items-center mb-4 cyber-line">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary bg-opacity-20">
                                <i className="text-2xl ri-map-pin-line text-primary"></i>
                            </div>
                            <h2 className="ml-3 text-xl font-semibold text-primary">Neural Hub Location</h2>
                        </div>
                        <div className="space-y-2">
                            <p className="text-secondary">Neo San Francisco District</p>
                            <p className="text-primary opacity-70">Grid Coordinates: SF-2077-X</p>
                            <div className="h-32 mt-4 overflow-hidden rounded-lg">
                                <img src="https://public.readdy.ai/ai/img_res/dbde0cbb0484ef5767d6a55b0ccf54e3.jpg"
                                    alt="Location Map"
                                    className="object-cover w-full h-full"></img>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-lg card">
                        <div className="flex items-center mb-4 cyber-line">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary bg-opacity-20">
                                <i className="text-2xl ri-brain-line text-primary"></i>
                            </div>
                            <h2 className="ml-3 text-xl font-semibold text-primary">Neural Enhancements</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 border rounded-lg bg-primary bg-opacity-10 border-primary border-opacity-20">
                                <div className="flex items-center justify-between">
                                    <p className="text-primary">Quantum Computing</p>
                                    <span className="text-secondary">Level: Master</span>
                                </div>
                                <div className="h-2 mt-2 bg-gray-800 rounded-full">
                                    <div className="h-full rounded-full bg-primary width: 95%"></div>
                                </div>
                            </div>
                            <div className="p-4 border rounded-lg bg-primary bg-opacity-10 border-primary border-opacity-20">
                                <div className="flex items-center justify-between">
                                    <p className="text-primary">Neural Interface Design</p>
                                    <span className="text-secondary">Level: Expert</span>
                                </div>
                                <div className="h-2 mt-2 bg-gray-800 rounded-full">
                                    <div className="h-full rounded-full bg-primary width: 88%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
                        <div className="p-6 rounded-lg card">
                            <div className="flex items-center mb-4 cyber-line">
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary bg-opacity-20">
                                    <i className="text-2xl ri-cpu-line text-primary"></i>
                                </div>
                                <h2 className="ml-3 text-xl font-semibold text-primary">Digital Augmentations</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-20 hover:bg-opacity-20">
                                    <i className="mb-2 text-2xl ri-virtual-reality-line text-secondary"></i>
                                    <h3 className="text-primary">Neural VR</h3>
                                    <p className="text-sm text-secondary opacity-70">Advanced Reality Manipulation</p>
                                </div>
                                <div className="p-4 transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-20 hover:bg-opacity-20">
                                    <i className="mb-2 text-2xl ri-eye-line text-secondary"></i>
                                    <h3 className="text-primary">Cyber Vision</h3>
                                    <p className="text-sm text-secondary opacity-70">4K Neural Uplink</p>
                                </div>
                                <div className="p-4 transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-20 hover:bg-opacity-20">
                                    <i className="mb-2 text-2xl ri-database-2-line text-secondary"></i>
                                    <h3 className="text-primary">Memory Core</h3>
                                    <p className="text-sm text-secondary opacity-70">Quantum Storage</p>
                                </div>
                                <div className="p-4 transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-20 hover:bg-opacity-20">
                                    <i className="mb-2 text-2xl ri-shield-keyhole-line text-secondary"></i>
                                    <h3 className="text-primary">Neural Shield</h3>
                                    <p className="text-sm text-secondary opacity-70">Firewall v5.0</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg card">
                            <div className="flex items-center mb-4 cyber-line">
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary bg-opacity-20">
                                    <i className="text-2xl ri-code-box-line text-primary"></i>
                                </div>
                                <h2 className="ml-3 text-xl font-semibold text-primary">Neural Network Projects</h2>
                            </div>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="group">
                                    <div className="relative p-6 overflow-hidden transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-20 hover:bg-opacity-20">
                                        <div className="absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 rounded-full bg-primary opacity-10"></div>
                                        <h3 className="mb-2 text-lg text-primary">Quantum Encryption</h3>
                                        <p className="mb-4 text-sm text-secondary">Advanced security protocols for neural data</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-primary opacity-70">Status: Active</span>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 mr-2 rounded-full bg-primary animate-pulse"></span>
                                                <span className="text-xs text-secondary">99.9% Uptime</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="relative p-6 overflow-hidden transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-20 hover:bg-opacity-20">
                                        <div className="absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 rounded-full bg-primary opacity-10"></div>
                                        <h3 className="mb-2 text-lg text-primary">AI Synthesis</h3>
                                        <p className="mb-4 text-sm text-secondary">Neural pattern recognition system</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-primary opacity-70">Status: Learning</span>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 mr-2 rounded-full bg-secondary animate-pulse"></span>
                                                <span className="text-xs text-secondary">Level 5 Access</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="relative p-6 overflow-hidden transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-20 hover:bg-opacity-20">
                                        <div className="absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 rounded-full bg-primary opacity-10"></div>
                                        <h3 className="mb-2 text-lg text-primary">Neural Interface</h3>
                                        <p className="mb-4 text-sm text-secondary">Direct consciousness connection</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-primary opacity-70">Status: Beta</span>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 mr-2 rounded-full bg-primary animate-pulse"></span>
                                                <span className="text-xs text-secondary">v2.0.4</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="relative p-6 overflow-hidden transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-20 hover:bg-opacity-20">
                                        <div className="absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 rounded-full bg-primary opacity-10"></div>
                                        <h3 className="mb-2 text-lg text-primary">Biotech Fusion</h3>
                                        <p className="mb-4 text-sm text-secondary">Organic-digital hybrid systems</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-primary opacity-70">Status: Prototype</span>
                                            <div className="flex items-center">
                                                <span className="w-2 h-2 mr-2 rounded-full bg-secondary animate-pulse"></span>
                                                <span className="text-xs text-secondary">Gen 3</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}