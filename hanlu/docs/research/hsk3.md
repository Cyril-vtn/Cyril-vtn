# HSK 3.0: research brief (as of 2026-09-23)

> Scope: the facts behind Hanlu's "HSK 3.0 explained" page and the product's level structure.
> Method: web search only. The egress proxy blocked direct fetches of chinesetest.cn, moe.gov.cn, Wikipedia and most blogs, so every claim below comes from search-result snippets. Several independent sources were cross-checked where possible.
> Confidence tags: **[confirmed]** = several independent sources agree, or it comes from an official body; **[likely]** = one or two credible sources; **[uncertain]** = sources conflict or are thin. Check against the official PDFs before publishing numbers as authoritative.

---

## 0. TL;DR for product decisions

1. **"HSK 3.0" names two different documents with two different sets of numbers.** Mixing them up is the biggest source of confusion online.
   - **(A) The 2021 national standard, GF0025-2021** (《国际中文教育中文水平等级标准》). It is a *proficiency framework*: 11,092 words, 3,000 characters, 1,110 syllables and 572 grammar points across 9 levels. HSK 1 alone = 500 words.
   - **(B) The 2025 HSK *exam* syllabus** (《中文水平考试 HSK 考试大纲》 / 新版HSK考试大纲). CLEC/CTI published it on 15 Nov 2025 and it took effect on 18 Nov 2025. It uses **much smaller beginner and intermediate lists**: cumulative 300 / 500 / 1,000 / 2,000 / 3,600 / 5,400 words for HSK 1–6, then about 11,000 words for 7–9. **[confirmed]** ([Hack Chinese](https://www.hackchinese.com/old-vs-new-hsk), [HSKStory](https://hskstory.com/guides/hsk-30-vocabulary-complete), [Linda Mandarin](https://www.lindamandarin.com.sg/hsk-vocabulary-count/), [official PDF link](https://hsk.cn-bj.ufileos.com/3.0/%E6%96%B0%E7%89%88HSK%E8%80%83%E8%AF%95%E5%A4%A7%E7%BA%B21219.pdf))
   - **Recommendation:** build Hanlu's exam-prep levels on **(B)**, because that is what the exam tests. Cite **(A)** as the underlying framework. Show both columns on the explainer page.
2. **Exam status today:** HSK 1–6 exams still run on the 2.0 format. The first global HSK 3.0 pilot for levels 1–6 took place on 31 Jan 2026, and a second pilot round is reported for 20 Sep 2026. **Official worldwide launch: 13 Dec 2026**, announced by CTI on 8 Sep 2026. HSK 3.0 becomes the standard version from Jan 2027, and 2.0 is reported to be discontinued rather than run in parallel. **[confirmed / likely]**
3. **HSK 7–9** has run since the first global sitting on 26 Nov 2022. It is one combined exam: 98 items, about 210 min, with listening, reading, writing, translation and speaking, graded by IRT into "below 7 / 7 / 8 / 9". **[confirmed]**
4. **Speaking becomes compulsory from HSK 3 upward.** HSKK must be registered together with HSK 3–6. Handwriting from memory is tested from HSK 2. Translation is added at HSK 5–6 and 7–9. **[likely]**

---

## 1. The standard: GF0025-2021

| Item | Fact | Confidence |
|---|---|---|
| Chinese title | 《国际中文教育中文水平等级标准》 (Chinese Proficiency Grading Standards for International Chinese Language Education) | confirmed |
| Code | GF 0025—2021 (a language-and-script norm, "GF") | confirmed |
| Issuers | Ministry of Education of the PRC + State Language Commission (国家语言文字工作委员会) | confirmed |
| Drafted by | Center for Language Education and Cooperation (CLEC, 中外语言交流合作中心), with BLCU experts | confirmed |
| Released | March 2021 (MOE announcement dated 2021-03-29) | confirmed |
| Effective | **1 July 2021** | confirmed |
| Print edition | Beijing Language and Culture University Press (BLCUP); a companion set of handwriting manuals (初/中/高等) exists | confirmed |
| Online lookup | Official query system launched Dec 2021 | likely |

Sources: [MOE announcement](http://www.moe.gov.cn/jyb_xwfb/gzdt_gzdt/s5987/202103/t20210329_523304.html), [MOE full-text PDF](http://www.moe.gov.cn/jyb_sjzl/ziliao/A19/202111/W020211118507389477190.pdf), [MOE Q&A](http://www.moe.gov.cn/jyb_xwfb/s271/202104/t20210402_524194.html), [BLCUP](https://www.blcup.com/PInfo/index/10865), [Baike](https://baike.baidu.com/item/%E5%9B%BD%E9%99%85%E4%B8%AD%E6%96%87%E6%95%99%E8%82%B2%E4%B8%AD%E6%96%87%E6%B0%B4%E5%B9%B3%E7%AD%89%E7%BA%A7%E6%A0%87%E5%87%86/56554961)

### 1.1 Architecture: "three stages, nine levels" (三等九级)

| Stage (等) | Levels | FR label | EN label |
|---|---|---|---|
| 初等 | 1, 2, 3 | Élémentaire | Elementary |
| 中等 | 4, 5, 6 | Intermédiaire | Intermediate |
| 高等 | 7, 8, 9 (not subdivided in the lists) | Avancé | Advanced |

### 1.2 The "3 + 5" / "four-element" model

- **4 language elements (四维基准):** syllables (音节), characters (汉字), vocabulary (词汇), grammar (语法).
- **3 evaluation dimensions (三个评价维度):** communicative ability (言语交际能力), topics and tasks (话题任务内容), quantitative language indicators (语言量化指标).
- **5 skills (五项语言技能):** listening, speaking, reading, writing and **translation** (translation is new compared with HSK 2.0 and is expected from the intermediate stage onward).
- Marketing shorthand seen online: "3 + 5" = 3 dimensions + 5 skills, built on the 4 elements.

### 1.3 Per-level quantitative indicators (GF0025-2021) **[confirmed; sums check out]**

| Level | Syllables new / total | Characters new / total | Words new / total | Grammar new / total |
|---|---|---|---|---|
| 1 | 269 / 269 | 300 / 300 | 500 / 500 | 48 / 48 |
| 2 | 199 / 468 | 300 / 600 | 772 / 1,272 | 81 / 129 |
| 3 | 140 / 608 | 300 / 900 | 973 / 2,245 | 81 / 210 |
| 4 | 116 / 724 | 300 / 1,200 | 1,000 / 3,245 | 76 / 286 |
| 5 | 98 / 822 | 300 / 1,500 | 1,071 / 4,316 | 71 / 357 |
| 6 | 86 / 908 | 300 / 1,800 | 1,140 / 5,456 | 67 / 424 |
| 7–9 | 202 / 1,110 | 1,200 / 3,000 | 5,636 / 11,092 | 148 / 572 |

Sources: [LTL](https://ltl-school.com/new-hsk/), [Chinesefor.us](https://chinesefor.us/new-hsk-2021-requirements-levels-3-0-standards/), [Skritter blog](https://blog.skritter.com/2021/06/the-new-hsk-3-0-what-you-need-to-know/), [GoEast](https://goeastmandarin.com/new-hsk-levels/). The totals (1,110 / 3,000 / 11,092 / 572) match the official MOE summary.

### 1.4 The 2025 exam syllabus (新版HSK考试大纲), cumulative totals **[likely: several sources quote the same numbers, but the PDF could not be downloaded here]**

| Level | Words | Recognition characters | Writing characters (from memory) | Grammar points |
|---|---|---|---|---|
| 1 | 300 | 246 | 0 | 70 |
| 2 | 500 | 371 | 100 | 148 |
| 3 | 1,000 | 655 | 250 | 244 |
| 4 | 2,000 | 1,096 | 400 | 339 |
| 5 | 3,600 | 1,527 | 550 | 409 |
| 6 | 5,400 | 1,940 | 700 | 459 |
| 7–9 | ≈11,000 | 3,088 | 1,200 | 593 |

- Published by CLEC at the **World Chinese Language Conference, 15 Nov 2025**, effective 18 Nov 2025. The document is 406 pages long and covers vocabulary, characters, grammar, topics and tasks ([HSKStory](https://hskstory.com/guides/what-is-hsk-30), [Hack Chinese](https://www.hackchinese.com/old-vs-new-hsk)).
- The syllabus counts grammar differently (593 vs 572) and characters differently (3,088 vs 3,000) from GF0025. Treat the two sets of figures as separate datasets. **[uncertain why; probably re-segmentation]**
- The syllabus **does not publish per-level syllable counts** as far as search snippets show **[uncertain]**. For syllables, Hanlu should keep using the GF0025 figures.
- Some words moved **down** a level: for example, items that were HSK 3 in 2.0 are now HSK 1 ([HSKLord](https://hsklord.com/blog/hsk-3-0-vs-2-0-comparison)).

### 1.5 Handwriting requirements

- **GF0025-2021 handwriting list (手写汉字表):** 1,200 characters in total, split by stage: **300 elementary / 400 intermediate / 500 advanced** (cumulative 300 / 700 / 1,200). **[confirmed]** ([BLCUP manual](https://www.blcup.com/PInfo/index/11288), [De Gruyter article](https://www.degruyterbrill.com/document/doi/10.1515/caslar-2023-0006/html))
- The per-level split inside each stage (often quoted as 100 / 200 / 300 …) is **[uncertain]**. Sources disagree.
- **2025 exam syllabus:** no handwriting at HSK 1. HSK 2 tests writing for the first time, from a list of about 100 characters (some sources say 101 shared by HSK 1–2). Cumulative writing lists: 250 at HSK 3, 700 at HSK 6, 1,200 at HSK 9 **[likely]**.
- Product implication: the handwriting module should gate on the exam's "writing list", not on all recognition characters.

### 1.6 Competency descriptors per level (paraphrased from GF0025 and exam-syllabus summaries) **[paraphrase; verify wording against the MOE PDF]**

| Level | Can do |
|---|---|
| 1 | Understand and use very simple words and phrases for self-introduction, greetings, numbers, time and immediate needs. |
| 2 | Handle short, routine exchanges on familiar topics (family, shopping, transport, hobbies); read short simple texts. |
| 3 | Communicate on everyday topics of life, study and work; tell or describe simple events in connected sentences; write short notes. |
| 4 | Take part in fairly complete conversations on a range of general topics; express opinions in simple paragraphs; begin simple translation. |
| 5 | Discuss social and cultural topics in some detail; read longer articles; write structured texts of several paragraphs. |
| 6 | Communicate fluently and appropriately on complex topics; compare and argue; understand most standard media. |
| 7–9 | Use Chinese for academic and professional purposes: complex discourse, formal register, idioms, oral and written translation across domains. |

---

## 2. Exam rollout: where things stand (Sept 2026)

### 2.1 Timeline

| Date | Event | Confidence |
|---|---|---|
| 2009–2010 | Hanban launches the "new HSK" (now called HSK 2.0): 6 levels, 5,000 words | confirmed |
| Mar 2021 | GF0025-2021 released by MOE and the State Language Commission | confirmed |
| 1 Jul 2021 | GF0025-2021 takes effect | confirmed |
| 26 Nov 2022 | First global HSK 7–9 exam | confirmed ([GoEast](https://goeastmandarin.com/hsk-7-9-exam/)) |
| 15 Nov 2025 | CLEC releases the new HSK exam syllabus at the World Chinese Language Conference, alongside the new *HSK Standard Course* (FLTRP) | confirmed ([FLTRP](http://www.fltrp.com/c/2025-11-20/540070.shtml)) |
| 18 Nov 2025 | Syllabus takes effect | likely |
| 19 Dec 2025 | Registration opens for the HSK 3.0 global pilot | confirmed ([CCTV](https://edu.cctv.com/2025/12/19/ARTIV4R5P66203aDjA16v9rn251219.shtml)) |
| 31 Jan 2026 | First HSK 3.0 global pilot, levels 1–6, paper and computer-based; HSK 3–6 must be taken with speaking | confirmed ([CTI notice](https://www.chinesetest.cn/notice), [Fundación CLEC](https://fundacionclec.org/zh-hant/hsk-3-0-%E8%80%83%E8%AF%95%E5%85%A8%E7%90%83%E8%AF%95%E8%A1%8C%E5%90%AF%E5%8A%A8/)) |
| Jan 2026 | Official online mock tests released | likely ([Shanghai edu](https://edu.sh.gov.cn/study_en_hsk/20260107/5292266eca744a959c1db43237fbc185.html)) |
| 14 Mar 2026 | Pilot results released | likely |
| Jul 2026 | "Full implementation" of the syllabus often quoted; in practice the regular 2026 dates kept the 2.0 format | uncertain |
| 8 Sep 2026 | CTI announces the official launch date on its WeChat account | likely ([Khanji](https://khanjischool.com/blog/chinese/hsk-3-0-launch-date-2026)) |
| 20 Sep 2026 | Second HSK 3.0 pilot round | uncertain (test-centre Facebook post) |
| **13 Dec 2026** | **HSK 3.0 official worldwide launch.** 2.0 is not expected to run in parallel | likely ([hskmock](https://hskmock.com/en/blog/618.html), [Hilingo](https://www.hilingo.cn/news/95.html)) |
| Jan 2027 | HSK 3.0 is the standard version worldwide | likely |

### 2.2 New formats (pilot / 3.0)

| Level | Written sections | Speaking | Notes |
|---|---|---|---|
| HSK 1 | Listening, reading | none | about 40 items **[uncertain for 3.0]** |
| HSK 2 | Listening, reading, **basic writing (new)** | none | about 60 items **[uncertain]** |
| HSK 3 | Listening, reading, writing | **compulsory**: about 15 min incl. 6 min prep; 3 parts (repeat 8, picture 5, answer 2) | [Mandarin Zone](https://www.mandarinzone.com/hskk-all-you-need-to-know/) **[likely]** |
| HSK 4 | Listening, reading, writing | compulsory | |
| HSK 5–6 | Listening, reading, writing, **translation (new)** | compulsory: 5 tasks, 3 parts, about 23 min incl. 10 min prep | [Mandarin Zone](https://www.mandarinzone.com/hsk-5-6-speaking-test-guide/) **[likely]** |
| HSK 7–9 | Listening, reading, writing, translation (written + oral) | integrated | 98 items, about 210 min; morning = L/R/W/written translation, afternoon = oral translation + speaking; IBT and paper | **[confirmed]** ([CTI 7-9](https://www.chinesetest.cn/HSK/7-9), [Wukong](https://www.wukongsch.com/blog/hsk-7-9-exam-2026-post-60079/)) |

- CTI describes the 3.0 exams as "fewer items, shorter duration, optimised question types" for levels 3–6. **Exact 3.0 durations for levels 1–6 are not confirmed**, so Hanlu should not publish minute counts for 1–6 until CTI's post-launch pages are checked.
- **Scoring:** HSK 2.0 uses 200 points at L1–2 (pass 120) and 300 at L3–6 (pass 180), with no section minimum. **3.0 pass marks for 1–6 are not yet confirmed [uncertain].** HSK 7–9 gives 0–100 per skill and an IRT-based level, with no single pass mark.
- **Validity:** the certificate does not expire; score reports count for 2 years for university admission in China. Existing 2.0 certificates stay valid.

---

## 3. HSK 2.0 vs HSK 3.0

| Topic | HSK 2.0 (2009/2010) | HSK 3.0 |
|---|---|---|
| Levels | 6 | 9 in 3 stages (7–9 = one exam) |
| Total words | 5,000 | ≈11,000 (11,092 in GF0025) |
| Characters | ≈2,663 (not an explicit syllabus element) | 3,000 (GF0025) / 3,088 recognition (exam syllabus), plus a separate 1,200 handwriting list |
| Syllables | Not specified | 1,110 listed explicitly |
| HSK 1 words | 150 | 300 (exam syllabus) / 500 (GF0025) |
| HSK 6 words | 5,000 | 5,400 (exam) / 5,456 (GF0025) |
| Skills | L/R/W | L/S/R/W + **translation** |
| Speaking | Separate optional HSKK | Compulsory from HSK 3 (joint registration) |
| Handwriting | Typing/pinyin accepted in IBT; characters from L3 | Handwritten list, tested from HSK 2 |
| Top level | ≈ B2/C1 (debated) | 7–9 aimed at academic and professional use |

## 4. What learners are confused about (FAQ fodder)

1. **"HSK 1 = 500 words or 300?"** Both numbers are real: 500 is GF0025, 300 is the exam syllabus. The exam uses 300.
2. **"Is HSK 3.0 in effect yet?"** The standard has been since 2021, HSK 7–9 exams since 2022, and HSK 1–6 exams only from **13 Dec 2026** (pilots before that).
3. **"Should I study 2.0 or 3.0 lists?"** Anyone sitting an exam from Dec 2026 onward should use 3.0. The 2.0 lists overlap heavily at low levels, but many words moved level.
4. **"Is my old certificate still valid?"** Yes. Some universities may ask which version it was.
5. **"New HSK 3 ≠ old HSK 3."** New 3.0 HSK 3 needs 1,000 words (exam) against 600 in 2.0, and the speaking test is compulsory.
6. **"Old HSK 6 = new HSK what?"** There is no official mapping. Old HSK 6 (5,000 words) roughly lines up with new HSK 6 (5,400) in vocabulary, but 3.0 adds translation and speaking **[opinion]**.
7. **"Do I need to hand-write characters?"** Yes, from HSK 2, but only from the published writing list.
8. **The name "HSK 3.0"** is informal. Official texts say 新版HSK, or refer to the standard.
9. **CEFR equivalence** is unofficial, and schools and blogs disagree.

## 5. Implications for Hanlu

- Use the **exam-syllabus word lists** for levels 1–6 (300 / 500 / 1,000 / 2,000 / 3,600 / 5,400) as the canonical study units. Keep the GF0025 counts on the explainer page for transparency.
- Lead with urgency: "The exam changes on 13 December 2026", "Examen HSK 3.0 : ce qui change le 13 décembre 2026".
- Build speaking and translation practice early; they are a differentiator because speaking is now compulsory at HSK 3–6.
- Handwriting drills should cover only the writing list (100 / 250 / 400 / …).
- Re-verify §1.4 and §2.2 against the official PDF ([hsk.cn-bj.ufileos.com](https://hsk.cn-bj.ufileos.com/3.0/%E6%96%B0%E7%89%88HSK%E8%80%83%E8%AF%95%E5%A4%A7%E7%BA%B21219.pdf)) and chinesetest.cn from an unrestricted network before launch.

## Sources
- MOE announcement: http://www.moe.gov.cn/jyb_xwfb/gzdt_gzdt/s5987/202103/t20210329_523304.html
- MOE standard PDF: http://www.moe.gov.cn/jyb_sjzl/ziliao/A19/202111/W020211118507389477190.pdf
- MOE Q&A: http://www.moe.gov.cn/jyb_xwfb/s271/202104/t20210402_524194.html
- New HSK exam syllabus PDF (CLEC): https://hsk.cn-bj.ufileos.com/3.0/%E6%96%B0%E7%89%88HSK%E8%80%83%E8%AF%95%E5%A4%A7%E7%BA%B21219.pdf
- CTI: https://www.chinesetest.cn/hsk ; https://www.chinesetest.cn/notice ; https://www.chinesetest.cn/HSK/7-9
- CCTV (pilot): https://edu.cctv.com/2025/12/19/ARTIV4R5P66203aDjA16v9rn251219.shtml
- FLTRP (syllabus + coursebook launch): http://www.fltrp.com/c/2025-11-20/540070.shtml
- Hack Chinese, old vs new: https://www.hackchinese.com/old-vs-new-hsk
- HSKStory: https://hskstory.com/guides/what-is-hsk-30 ; https://hskstory.com/guides/hsk-30-vocabulary-complete
- Khanji School (13 Dec 2026): https://khanjischool.com/blog/chinese/hsk-3-0-launch-date-2026
- hskmock (official launch): https://hskmock.com/en/blog/618.html
- GoEast (7–9): https://goeastmandarin.com/hsk-7-9-exam/
- Mandarin Zone (HSKK 3.0): https://www.mandarinzone.com/hskk-all-you-need-to-know/
- LTL (GF0025 table): https://ltl-school.com/new-hsk/
- Skritter blog: https://blog.skritter.com/2021/06/the-new-hsk-3-0-what-you-need-to-know/
- Handwriting manual (BLCUP): https://www.blcup.com/PInfo/index/11288
