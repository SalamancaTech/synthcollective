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
                                            topTitle: 'Severity/Impact', rightTitle: 'Relevance', bottomTitle: 'Clarity', leftTitle: 'Health/Insight'
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
                                            topTitle: 'Severity/Impact', rightTitle: 'Relevance', bottomTitle: 'Clarity', leftTitle: 'Health/Insight'
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
                                            topTitle: 'Severity/Impact', rightTitle: 'Relevance', bottomTitle: 'Clarity', leftTitle: 'Health/Insight'
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
                                <div style="font-size: 150px; color: #94a3b8; margin-top: 100px;">3 Rooms • 24 Comments</div>
                            `,
                            children: []
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
