<?php

declare(strict_types=1);

require __DIR__ . '/src/header.php';

?>

<main class="page" id="top">
    <section class="hero">
        <div class="hero-layout">
            <div class="hero-photo">
                <img class="photo" src="pictures/IMG_9725.PNG" alt="Portrait of <?= e($site['name']); ?>" />
            </div>

            <div class="hero-text">
                <h1 class="hero-title"><?= e($site['name']); ?></h1>
                <p class="hero-lead"><?= e($site['headline']); ?></p>
            </div>
        </div>
    </section>

    <section class="block" id="education">
        <div class="block-head">
            <h2 class="block-title">Education</h2>
            <p class="block-sub">
                <?= e($education['title']); ?> — <?= e($education['meta']); ?>
            </p>
        </div>

        <div class="education-grid">
            <div class="note note-yellow">
                <h3 class="note-title">What I’m learning</h3>
                <ul class="note-list">
                    <?php foreach ($education['highlights'] as $item): ?>
                        <li><?= e($item); ?></li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <div class="note note-pink">
                <h3 class="note-title">Courses</h3>
                <ul class="course-list">
                    <?php foreach ($education['courses'] as $course): ?>
                        <li class="course course-<?= e($course['status']); ?>">
                            <span class="course-icon" aria-hidden="true"></span>

                            <span class="course-title">
                                <?= e($course['title']); ?>
                            </span>

                            <span class="course-status">
                                <?= ucfirst(e($course['status'])); ?>
                            </span>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </section>


    <section class="block" id="about">
        <div class="block-head">
            <h2 class="block-title">About</h2>
        </div>

        <div class="note note-white">
            <h3 class="note-title">A little thing about me..</h3>

            <div class="about-content" id="about-content">
                <p class="note-text">
                    I’m 37 and not afraid of making big life changes — stepping into web development was one of those decisions that felt both scary and completely right at the same time. I’m a positive and curious person by nature, and I genuinely enjoy learning new things, especially when it means challenging myself and growing along the way.

                    Outside of my work, I try to keep a good balance in life. Training and yoga are important parts of my everyday routine, helping me stay focused, grounded and energized. I also love traveling, discovering new places and perspectives, and taking inspiration from environments that feel different from my own.
                </p>
            </div>

            <button
                class="about-toggle"
                type="button"
                aria-controls="about-content"
                aria-expanded="false">
                Read more
            </button>
        </div>


        <div class="note note-blue">
            <h3 class="note-title">Experience</h3>

            <div class="experience-content" id="experience-content">
                <ul class="note-list experience-list">
                    <?php foreach ($experience as $item): ?>
                        <li><?= e($item); ?></li>
                    <?php endforeach; ?>
                </ul>

                <p class="note-text" style="margin-top: 12px;">
                    Curious about what Visual Merchandising means?
                    <a href="https://www.ihm.se/utbildningar/forsaljning/visual-merchandiser-unified-commerce/"
                        target="_blank"
                        rel="noreferrer">Read more about the education at IHM</a>
                </p>
            </div>

            <button
                class="experience-toggle"
                type="button"
                aria-controls="experience-content"
                aria-expanded="false">
                Read more
            </button>
        </div>
        <div class="note note-white">
            <h3 class="note-title">Documents</h3>

            <p class="note-text">
                Want to know more about me and how I work?
                You can read my cover letter or view my CV.
            </p>

            <div class="doc-actions">
                <button
                    class="doc-btn"
                    type="button"
                    data-open-dialog="cover-letter-dialog">
                    Read cover letter
                </button>

                <a
                    class="doc-btn doc-btn-secondary"
                    href="public/cv-daniella-saadon.pdf"
                    target="_blank"
                    rel="noreferrer">
                    Open CV (PDF)
                </a>
            </div>
        </div>
    </section>


    <section class="block" id="projects">
        <div class="block-head">
            <h2 class="block-title">School Projects</h2>
            <p class="block-sub">A few things I’ve built and deployed during my studies.</p>
        </div>

        <div class="projects-grid">
            <?php foreach ($projects as $project): ?>
                <div class="project-card">
                    <h3 class="project-title"><?= e($project['name']); ?></h3>

                    <p class="project-text">
                        <?= e($project['description']); ?>
                    </p>

                    <span class="project-meta"><?= e($project['tech']); ?></span>

                    <div class="project-actions">
                        <a class="project-btn"
                            href="<?= e($project['url']); ?>"
                            target="_blank"
                            rel="noreferrer">
                            Website
                        </a>

                        <a class="project-btn project-btn-secondary"
                            href="<?= e($project['repo']); ?>"
                            target="_blank"
                            rel="noreferrer">
                            Repository
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="block" id="contact">
        <div class="block-head">
            <h2 class="block-title">Contact</h2>
        </div>

        <div class="contact-panel contact-panel-fancy">
            <div class="contact-headline">

                <div class="contact-title-row">
                    <!-- <p class="contact-big">How to find me</p> -->
                    <!-- <span class="contact-status" aria-label="Availability status">
                            <span class="contact-status-dot" aria-hidden="true"></span>
                            Open to opportunities
                        </span> -->
                </div>
            </div>

            <div class="contact-grid contact-grid-fancy">
                <a class="contact-card contact-card-email contact-card-fancy" href="mailto:<?= e($site['email']); ?>">
                    <div class="contact-card-top">
                        <span class="contact-kicker">Email</span>
                        <span class="contact-icon" aria-hidden="true">✉</span>
                    </div>

                    <span class="contact-main"><?= e($site['email']); ?></span>
                    <span class="contact-cta">Write →</span>
                </a>

                <a class="contact-card contact-card-linkedin contact-card-fancy" href="<?= e($site['linkedin']); ?>" target="_blank" rel="noreferrer">
                    <div class="contact-card-top">
                        <span class="contact-kicker">LinkedIn</span>
                        <span class="contact-icon" aria-hidden="true">in</span>
                    </div>

                    <span class="contact-main">Connect</span>
                    <span class="contact-cta">Open →</span>
                </a>

                <a class="contact-card contact-card-github contact-card-fancy" href="<?= e($site['github']); ?>" target="_blank" rel="noreferrer">
                    <div class="contact-card-top">
                        <span class="contact-kicker">GitHub</span>
                        <span class="contact-icon" aria-hidden="true">⌘</span>
                    </div>

                    <span class="contact-main">See work</span>
                    <span class="contact-cta">Open →</span>
                </a>
            </div>
        </div>

        </div>
    </section>

    <footer class="footer">
        <p>© <?= e((string)date('Y')); ?> <?= e($site['name']); ?></p>
        <button class="top" type="button">Top ↑</button>
    </footer>
</main>

<dialog class="doc-dialog" id="cover-letter-dialog">
    <div class="doc-dialog-inner">
        <div class="doc-dialog-head">
            <h2 class="doc-dialog-title">
                <?= e($coverLetter['title']); ?>
            </h2>
        </div>

        <div class="doc-dialog-content">
            <?php foreach ($coverLetter['paragraphs'] as $paragraph): ?>
                <p><?= e($paragraph); ?></p>
            <?php endforeach; ?>
        </div>

        <div class="doc-dialog-actions">
            <button class="doc-btn" type="button" data-close-dialog>
                Close
            </button>
        </div>
    </div>
</dialog>


<script src="public/script.js"></script>
</body>

</html>