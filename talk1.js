addLesson({
    categoryKey: 'talk',
    categoryName: 'المحادثة',
    title: 'الدرس الأول: الترحيب والتعارف',
    excerpt: 'تعلم أساسيات التعارف والترحيب باللغة الإنجليزية وكيفية إدامة المحادثة اليومية بشكل صحيح.',
    content: `
        <p>مرحباً بك في الدرس الأول! ستتعلم هنا العبارات الأساسية المستخدمة عند لقاء شخص لأول مرة وكيفية الترحيب به والتعريف بنفسك:</p>

        <h3 style="color: #1e293b; margin-top: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px;">1. عبارات الترحيب والتعارف (Greetings & Introduction)</h3>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">Nice to meet you, my name is Alex.</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">سررت بلقائك، اسمي أليكس.</div>
            <div class="audio-player" onclick="playAudio('Nice to meet you, my name is Alex.', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">It’s a pleasure to meet you. I’m Sarah.</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">يسعدني جداً التعرف عليك. أنا سارة.</div>
            <div class="audio-player" onclick="playAudio('It’s a pleasure to meet you. I’m Sarah.', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">How are you doing today?</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">كيف حالك اليوم؟</div>
            <div class="audio-player" onclick="playAudio('How are you doing today?', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">I’m doing great, thank you! How about you?</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">أنا بخير جداً، شكرًا لك! وماذا عنك؟</div>
            <div class="audio-player" onclick="playAudio('I’m doing great, thank you! How about you?', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>

        <h3 style="color: #1e293b; margin-top: 25px; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px;">2. إنهاء المحادثة (Closing the Conversation)</h3>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">It was really nice talking to you.</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">كان من اللطيف جداً الحديث معك.</div>
            <div class="audio-player" onclick="playAudio('It was really nice talking to you.', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">Have a wonderful day!</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">أتمنى لك يوماً رائعاً!</div>
            <div class="audio-player" onclick="playAudio('Have a wonderful day!', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>
    `
});
