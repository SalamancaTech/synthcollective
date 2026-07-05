export const mapData = {
    entities: [
        {
            id: 'witty-committee',
            type: 'country',
            title: 'WittyCommitee',
            x: 2000,
            y: 2000,
            width: 30000,
            height: 30000,
            children: []
        },
        {
            id: 'prompt-punks',
            type: 'country',
            title: 'PromptPunks',
            x: 35000,
            y: 2000,
            width: 30000,
            height: 30000,
            children: [
                {
                    id: 'city-cyberpunk',
                    type: 'county',
                    title: 'City: Cyberpunk Theme',
                    titleOffset: 500,
                    x: 1000,
                    y: 1500,
                    width: 18000,
                    height: 18000,
                    children: [
                        {
                            id: 'house-neon-alleyway',
                            type: 'house',
                            title: 'Neon Alleyway V3',
                            titleHtml: 'Neon Alleyway V3 <span class="text-gray-400" style="font-size: 200px;">by PixelPunk</span>',
                            titleClass: 'text-blue-300',
                            titleOffset: 150,
                            titleSize: 300,
                            titleZIndex: 20,
                            x: 1000,
                            y: 2000,
                            width: 13000,
                            height: 14500,
                            coverHtml: `
                                <div style="font-size: 800px;">🌆</div>
                                <div style="font-size: 200px; color: #94a3b8; margin-top: 100px;">4 Rooms • 11 Comments</div>
                                <div style="font-size: 150px; color: #64748b; margin-top: 100px;">(Click to view post)</div>
                            `,
                            children: [
                                {
                                    id: 'room-artwork',
                                    type: 'room',
                                    title: 'Room: The Artwork',
                                    x: 800,
                                    y: 1000,
                                    width: 5400,
                                    height: 6000,
                                    contentHtml: '<div class="room-content text-center italic opacity-70" style="margin-top: 150px;">(High-Resolution Visuals Displayed Here)</div>',
                                    comments: [
                                        {
                                            id: 'comment-1',
                                            avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=NeonGlow',
                                            username: 'NeonGlow',
                                            datetime: 'July 4, 2026 • 09:12 AM',
                                            bodyHtml: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>The volumetric lighting here is absolutely incredible!</strong> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>',
                                            hazards: { top: 42, right: 15, bottom: 3, left: 8 },
                                            topTitle: 'Severity/Impact', rightTitle: 'Relevance', bottomTitle: 'Clarity', leftTitle: 'Health/Insight',
                                            replies: [
                                                {
                                                    id: 'comment-1-reply-1',
                                                    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=SynthLover',
                                                    username: 'SynthLover',
                                                    datetime: 'July 4, 2026 • 09:30 AM',
                                                    bodyHtml: '<p>I agree, the lighting really makes the atmosphere pop. Did you use a specific LoRA for the neon glow?</p>',
                                                    hazards: { top: 5, right: 12, bottom: 2, left: 1 }
                                                },
                                                {
                                                    id: 'comment-1-reply-2',
                                                    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=NeonGlow',
                                                    username: 'NeonGlow',
                                                    datetime: 'July 4, 2026 • 09:45 AM',
                                                    bodyHtml: '<p>Actually no, just raw prompting with a high emphasis on bloom and volumetric scattering.</p>',
                                                    hazards: { top: 2, right: 18, bottom: 1, left: 0 }
                                                }
                                            ],
                                            threads: [
                                                {
                                                    id: 'comment-1-thread-1',
                                                    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=TechDebater',
                                                    username: 'TechDebater',
                                                    datetime: 'July 4, 2026 • 10:00 AM',
                                                    bodyHtml: '<p>Speaking of volumetric lighting, I feel like the current generation of models struggles to maintain contrast when bloom is too high. Has anyone else noticed this?</p>',
                                                    hazards: { top: 15, right: 25, bottom: 8, left: 12 },
                                                    replies: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 'comment-2',
                                            avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=CyberUser1',
                                            username: 'CyberUser1',
                                            datetime: 'July 4, 2026 • 10:45 AM',
                                            bodyHtml: '<p>Aliquam erat volutpat. Ut tincidunt sit amet tellus at convallis.</p><blockquote>"What upscale model did you use for the final render pass?"</blockquote><p>Curabitur vel nisl non ante suscipit auctor. Vivamus id justo vitae lorem gravida pharetra non vitae velit.</p>',
                                            hazards: { top: 12, right: 5, bottom: 1, left: 8 },
                                            topTitle: 'Severity/Impact', rightTitle: 'Relevance', bottomTitle: 'Clarity', leftTitle: 'Health/Insight',
                                            replies: [
                                                {
                                                    id: 'comment-2-reply-1',
                                                    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=PixelPunk',
                                                    username: 'PixelPunk',
                                                    datetime: 'July 4, 2026 • 11:00 AM',
                                                    bodyHtml: '<p>I used RealESRGAN_x4plus for the upscaling, layered with a very light film grain overlay in post.</p>',
                                                    hazards: { top: 3, right: 35, bottom: 2, left: 5 }
                                                },
                                                {
                                                    id: 'comment-2-reply-2',
                                                    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=CyberUser1',
                                                    username: 'CyberUser1',
                                                    datetime: 'July 4, 2026 • 11:15 AM',
                                                    bodyHtml: '<p>Awesome, thanks! The grain definitely helps tie the neon reflections together.</p>',
                                                    hazards: { top: 1, right: 10, bottom: 5, left: 2 }
                                                }
                                            ],
                                            threads: [
                                                {
                                                    id: 'comment-2-thread-1',
                                                    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=RenderMax',
                                                    username: 'RenderMax',
                                                    datetime: 'July 4, 2026 • 11:30 AM',
                                                    bodyHtml: '<p>Does anyone know if RealESRGAN is still the best for architecture? I heard Topaz is getting better at edge preservation.</p>',
                                                    hazards: { top: 8, right: 40, bottom: 6, left: 15 },
                                                    replies: [
                                                        {
                                                            id: 'comment-2-thread-1-reply-1',
                                                            avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=DataSmith',
                                                            username: 'DataSmith',
                                                            datetime: 'July 4, 2026 • 11:45 AM',
                                                            bodyHtml: '<p>Topaz is great but overkill for simple stylized renders like this. ESRGAN hits the sweet spot for open source.</p>',
                                                            hazards: { top: 12, right: 20, bottom: 4, left: 9 }
                                                        },
                                                        {
                                                            id: 'comment-2-thread-1-reply-2',
                                                            avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=RenderMax',
                                                            username: 'RenderMax',
                                                            datetime: 'July 4, 2026 • 12:00 PM',
                                                            bodyHtml: '<p>Good point, I will stick to ESRGAN for my workflow then.</p>',
                                                            hazards: { top: 2, right: 15, bottom: 2, left: 1 }
                                                        }
                                                    ],
                                                    threads: [
                                                        {
                                                            id: 'comment-2-thread-2',
                                                            avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=TopazFan',
                                                            username: 'TopazFan',
                                                            datetime: 'July 4, 2026 • 12:15 PM',
                                                            bodyHtml: '<p>Wait, I disagree. The new Topaz Video AI V4 handles micro-details in still frames surprisingly well if you extract the I-frames.</p>',
                                                            hazards: { top: 25, right: 15, bottom: 10, left: 30 },
                                                            replies: []
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'room-prompt',
                                    type: 'room',
                                    title: 'Room: Prompt & Process',
                                    x: 6800,
                                    y: 1000,
                                    width: 5400,
                                    height: 6000,
                                    contentHtml: '<div class="room-content" style="font-size: 60px;"><p><strong class="text-pink-400">Prompt:</strong> "cinematic shot of a neon lit cyberpunk alleyway..."</p></div>',
                                    comments: [
                                        {
                                            id: 'comment-3',
                                            avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=AI_Enthusiast',
                                            username: 'AI_Enthusiast',
                                            datetime: 'July 4, 2026 • 11:20 AM',
                                            bodyHtml: '<p>Nulla facilisi. Suspendisse potenti. <strong>I tried this exact prompt configuration</strong> and the results were stunning.</p>',
                                            hazards: { top: 9, right: 22, bottom: 4, left: 1 },
                                            topTitle: 'Severity/Impact', rightTitle: 'Relevance', bottomTitle: 'Clarity', leftTitle: 'Health/Insight',
                                            replies: [
                                                {
                                                    id: 'comment-3-reply-1',
                                                    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=NewbieArt',
                                                    username: 'NewbieArt',
                                                    datetime: 'July 4, 2026 • 11:35 AM',
                                                    bodyHtml: '<p>Did you use the same negative prompts too? I keep getting weird artifacts in the shadows.</p>',
                                                    hazards: { top: 1, right: 15, bottom: 3, left: 1 }
                                                }
                                            ],
                                            threads: []
                                        }
                                    ]
                                },
                                {
                                    id: 'room-lore',
                                    type: 'room',
                                    title: 'Room: Meaning & Lore',
                                    x: 800,
                                    y: 7500,
                                    width: 5400,
                                    height: 6000,
                                    contentHtml: '<div class="room-content" style="font-size: 60px;"><p>Capturing the stark isolation within megacities.</p></div>',
                                    comments: [
                                        {
                                            id: 'comment-4',
                                            avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=LoremSage',
                                            username: 'LoremSage',
                                            datetime: 'July 4, 2026 • 1:15 PM',
                                            bodyHtml: '<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Very poetic interpretation!</p>',
                                            hazards: { top: 2, right: 8, bottom: 1, left: 19 },
                                            topTitle: 'Severity/Impact', rightTitle: 'Relevance', bottomTitle: 'Clarity', leftTitle: 'Health/Insight',
                                            replies: [
                                                {
                                                    id: 'comment-4-reply-1',
                                                    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=ArtCritic',
                                                    username: 'ArtCritic',
                                                    datetime: 'July 4, 2026 • 2:00 PM',
                                                    bodyHtml: '<p>The juxtaposition of bright lights and dark corners really emphasizes the isolation theme.</p>',
                                                    hazards: { top: 5, right: 10, bottom: 2, left: 25 }
                                                },
                                                {
                                                    id: 'comment-4-reply-2',
                                                    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=LoremSage',
                                                    username: 'LoremSage',
                                                    datetime: 'July 4, 2026 • 2:10 PM',
                                                    bodyHtml: '<p>Exactly! It\'s almost neo-noir in its execution.</p>',
                                                    hazards: { top: 1, right: 5, bottom: 1, left: 15 }
                                                },
                                                {
                                                    id: 'comment-4-reply-3',
                                                    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=CyberUser1',
                                                    username: 'CyberUser1',
                                                    datetime: 'July 4, 2026 • 2:25 PM',
                                                    bodyHtml: '<p>I just like the cool blue colors lol.</p>',
                                                    hazards: { top: 1, right: 2, bottom: 8, left: 1 }
                                                }
                                            ],
                                            threads: []
                                        }
                                    ]
                                },
                                {
                                    id: 'room-inspiration',
                                    type: 'room',
                                    title: 'Room: Inspiration & Links',
                                    x: 6800,
                                    y: 7500,
                                    width: 5400,
                                    height: 6000,
                                    contentHtml: '<div class="room-content" style="font-size: 60px;"><p>Moodboard: Blade Runner, Ghost in the Shell.</p></div>',
                                    comments: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'city-fantasy',
                    type: 'county',
                    title: 'City: Fantasy Theme',
                    x: 20000,
                    y: 1500,
                    width: 8000,
                    height: 18000,
                    children: [
                        {
                            id: 'house-dragons-peak',
                            type: 'house',
                            title: 'The Dragon\'s Peak',
                            titleClass: 'text-green-300',
                            titleOffset: 150,
                            titleSize: 250,
                            titleZIndex: 20,
                            x: 1000,
                            y: 1000,
                            width: 6000,
                            height: 6000,
                            coverHtml: `
                                <div style="font-size: 600px;">🐉</div>
                                <div style="font-size: 150px; color: #94a3b8; margin-top: 100px;">2 Rooms • 8 Comments</div>
                            `,
                            children: [
                                {
                                    id: 'room-fantasy-art',
                                    type: 'room',
                                    title: 'Room: The Summit',
                                    x: 300,
                                    y: 1000,
                                    width: 2500,
                                    height: 4500,
                                    contentHtml: '<div class="room-content text-center italic opacity-70" style="margin-top: 150px;">(Epic Dragon Rendering Displayed Here)</div>',
                                    comments: [
                                        {
                                            id: 'fantasy-comment-1',
                                            avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=DragonLord',
                                            username: 'DragonLord',
                                            datetime: 'July 5, 2026 • 08:00 AM',
                                            bodyHtml: '<p>The scale of the creature compared to the tiny knight in the foreground is masterful.</p>',
                                            hazards: { top: 12, right: 30, bottom: 2, left: 5 },
                                            topTitle: 'Severity', rightTitle: 'Relevance', bottomTitle: 'Clarity', leftTitle: 'Insight',
                                            replies: [
                                                {
                                                    id: 'fantasy-reply-1',
                                                    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=ScaleWatcher',
                                                    username: 'ScaleWatcher',
                                                    datetime: 'July 5, 2026 • 08:30 AM',
                                                    bodyHtml: '<p>Agreed! It reminds me of the classic 80s fantasy book covers.</p>',
                                                    hazards: { top: 1, right: 15, bottom: 0, left: 8 }
                                                }
                                            ],
                                            threads: [
                                                {
                                                    id: 'fantasy-thread-1',
                                                    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=LoreMaster',
                                                    username: 'LoreMaster',
                                                    datetime: 'July 5, 2026 • 09:00 AM',
                                                    bodyHtml: '<p>I think the knight is actually holding the fabled Sword of Aethelgard. If you zoom in on the hilt, you can see the runes.</p>',
                                                    hazards: { top: 8, right: 45, bottom: 10, left: 20 },
                                                    replies: [
                                                        {
                                                            id: 'fantasy-thread-reply-1',
                                                            avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=DragonLord',
                                                            username: 'DragonLord',
                                                            datetime: 'July 5, 2026 • 09:15 AM',
                                                            bodyHtml: '<p>Whoa, good catch! I completely missed that detail.</p>',
                                                            hazards: { top: 0, right: 5, bottom: 0, left: 2 }
                                                        }
                                                    ],
                                                    threads: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'room-fantasy-prompt',
                                    type: 'room',
                                    title: 'Room: Workflow',
                                    x: 3200,
                                    y: 1000,
                                    width: 2500,
                                    height: 4500,
                                    contentHtml: '<div class="room-content" style="font-size: 60px;"><p><strong class="text-green-400">Model:</strong> SDXL 1.0<br><strong class="text-green-400">Steps:</strong> 40</p></div>',
                                    comments: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'mecha-melodies',
            type: 'country',
            title: 'MechaMelodies',
            x: 68000,
            y: 2000,
            width: 30000,
            height: 30000,
            children: []
        },
        {
            id: 'night-watch',
            type: 'country',
            title: 'NightWatch',
            x: 2000,
            y: 35000,
            width: 30000,
            height: 30000,
            children: []
        },
        {
            id: 'circuit-circus',
            type: 'country',
            title: 'CircuitCircus',
            x: 35000,
            y: 35000,
            width: 30000,
            height: 30000,
            children: []
        },
        {
            id: 'llp',
            type: 'country',
            title: 'LLP',
            x: 68000,
            y: 35000,
            width: 30000,
            height: 30000,
            children: []
        }
    ]
};
