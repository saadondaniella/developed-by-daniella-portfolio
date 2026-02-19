<?php

declare(strict_types=1);

function e(string|null $value): string
{
    return htmlspecialchars($value ?? '', ENT_QUOTES, 'UTF-8');
}

$site = require __DIR__ . '/../data/site.php';
$education = require __DIR__ . '/../data/education.php';
$projects = require __DIR__ . '/../data/projects.php';
$experience = require __DIR__ . '/../data/experience.php';
$coverLetter = require __DIR__ . '/../data/cover-letter.php';

?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title><?= e($site['name']); ?> • Portfolio</title>
    <meta name="description" content="Portfolio of <?= e($site['name']); ?> — web development, design and projects." />

    <link rel="stylesheet" href="public/style.css?v=202602191607" />
    <link rel="stylesheet" href="public/style-header.css?v=202602191607" />
    <link rel="stylesheet" href="public/contact-footer.css?v=202602191607" />
    <link rel="stylesheet" href="public/style-desktop.css?v=202602191607" />


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Gilda+Display&display=swap" rel="stylesheet">
</head>

<body>
    <div class="bg" aria-hidden="true">
        <div class="bg-blob bg-blob-orange"></div>
        <div class="bg-blob bg-blob-lavender"></div>
        <div class="bg-blob bg-blob-blue"></div>
        <div class="bg-grain"></div>
    </div>

    <header class="topbar">
        <div class="topbar-inner">
            <a class="topbar-name" href="#top" data-scroll><?= e($site['name']); ?></a>

            <nav class="topnav" aria-label="Primary">
                <a class="topnav-link" href="#education" data-scroll>Education</a>
                <a class="topnav-link" href="#about" data-scroll>About</a>
                <a class="topnav-link" href="#projects" data-scroll>Projects</a>
                <a class="topnav-link" href="#contact" data-scroll>Contact</a>
                <span class="topnav-dot" aria-hidden="true">•</span>
                <a class="topnav-link" href="<?= e($site['github']); ?>" target="_blank" rel="noreferrer">GitHub</a>
                <a class="topnav-link" href="<?= e($site['linkedin']); ?>" target="_blank" rel="noreferrer">LinkedIn</a>
            </nav>

            <button class="menu-btn" type="button" aria-controls="menu" aria-expanded="false">
                <span class="menu-icon" aria-hidden="true"></span>
                <span class="menu-label">Menu</span>
            </button>
        </div>
    </header>

    <div class="menu" id="menu" hidden>
        <div class="menu-inner">
            <a class="menu-link" href="#education" data-scroll>Education</a>
            <a class="menu-link" href="#about" data-scroll>About</a>
            <a class="menu-link" href="#projects" data-scroll>Projects</a>
            <a class="menu-link" href="#contact" data-scroll>Contact</a>
            <div class="menu-divider"></div>
            <a class="menu-link" href="<?= e($site['github']); ?>" target="_blank" rel="noreferrer">GitHub</a>
            <a class="menu-link" href="<?= e($site['linkedin']); ?>" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
    </div>