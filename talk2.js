addLesson({
    categoryKey: 'talk',
    categoryName: 'المحادثة',
    title: 'الدرس الثاني: الأصل والإقامة',
    excerpt: 'تعلم العبارات المستخدمة للحديث عن بلدك، مكان إقامتك، والمدة التي قضيتها هناك باللغة الإنجليزية.',
    content: `
        <p>مرحباً بك في الدرس الثاني! ستتعلم هنا كيفية السؤال والحديث عن الأصل، الجنسية، ومكان السكن الحالي:</p>

        <h3 style="color: #1e293b; margin-top: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px;">1. السؤال عن الأصل والموطن (Asking About Origin)</h3>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">Where are you from?</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">من أين أنت؟</div>
            <div class="audio-player" onclick="playAudio('Where are you from?', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">I am originally from Iraq, but I live in Baghdad.</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">أنا في الأصل من العراق، ولكني أعيش في بغداد.</div>
            <div class="audio-player" onclick="playAudio('I am originally from Iraq, but I live in Baghdad.', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>

        <h3 style="color: #1e293b; margin-top: 25px; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px;">2. السؤال عن مدة الإقامة (Asking About Duration)</h3>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">How long have you been living here?</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">كم لك من الوقت تعيش هنا؟</div>
            <div class="audio-player" onclick="playAudio('How long have you been living here?', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">I have been living here for about three years.</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">أعيش هنا منذ حوالي ثلاث سنوات.</div>
            <div class="audio-player" onclick="playAudio('I have been living here for about three years.', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>
    `
});
