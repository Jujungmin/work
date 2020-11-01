<h1>💁🏻 About This Portfolio</h1>
<br>

<p><strong><a href='http://en.lanbelle.com/?forced_lang=en'>기존에 있던 랑벨(Lanbelle)홈페이지</a> 디자인을 가이드로 하여 퍼블리싱하였습니다.</strong></p>
<br>

<blockquote><p>각각의 페이지에 따라 다양한 동적 효과를 보여주며,<br />
반응형 웹페이지를 통해 PC, Mobile에서도 자유롭게 구현하는 데 좋을 것 같아 선정하게 되었습니다.</p>
</blockquote>

<br>

<p><strong style="padding-right: 125px">Date</strong>2020.09 ~ 2020.10</p>
<p><strong style="padding-right: 125px">Role</strong>마크업(100%) , 스크립트제작(100%)</p>
<p><strong style="padding-right: 95px">Viewport</strong>반응형</p>
<p><strong style="padding-right: 50px">Cross Browsing</strong>크로스브라우징</p>
<p><strong style="padding-right: 130px">URL</strong>포트폴리오👉🏻	<a href='https://jujungmin.github.io/work' target='_blank' class='url'>https://jujungmin.github.io/work</a></p>
<p style="padding-left: 160px">블로그👉🏻	<a href='https://jmjmjm.tistory.com' target='_blank' class='url'>https://jmjmjm.tistory.com</a></p>
<br>
<br>
<br>

<h2>File / folder structure</h2>
<figure><table>
<thead>
<tr><th>분류 폴더</th><th>서브 폴더</th><th>파일 이름</th><th>파일 설명</th></tr></thead>
<tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>index.html<br>sub1.html<br>sub2.html<br>sub3.html<br>sub4.html<br>sub5.html</td><td>메인페이지<br>서브페이지 - philosophy<br>서브페이지 - brand<br>서브페이지 - products<br>서브페이지 - community<br>서브페이지 - shop</td></tr><tr><td>CSS</td><td>&nbsp;</td><td>reset.css<br>common.css<br>main.css<br>responsive.css<br>sub.css<br>jquery-ui.css</td><td>초기화<br>layout, header ,footer <br>메인페이지<br>common.css / main.css 반응형<br>서브페이지 / 반응형 서브페이지<br>jquery ui 스타일</td></tr><tr><td>CSS</td><td>fonts</td><td>all.css<br>font_ko.css<br>font.css</td><td>Font Awesome icon<br>notoSansKR - 한국어폰트<br>Gotham - 영어폰트</td></tr><tr><td>JS</td><td>&nbsp;</td><td>common.js<br>main.js<br>sub.js<br>jquery-3.1.0.min.js</td><td>layout, header, footer<br>메인페이지<br>서브페이지<br>jquery</td></tr><tr><td>JS</td><td>plugIn</td><td>jquery-ui.min.js<br>skoller.min.js<br>slick.min.js</td><td>&nbsp;</td></tr><tr><td>fonts</td><td>Gotham<br>NotoSansKR<br>webfonts</td><td>&nbsp;</td><td>Gotham<br>NotoSansKR<br>Font Awesome icon</td></tr><tr><td>images</td><td>common<br>main<br>sub<br>favicon</td><td>&nbsp;</td><td>header, footer 이미지<br>메인페이지 이미지<br>서브페이지 이미지<br>웹 페이지 아이콘</td></tr></tbody>
</table></figure>
<br>
<br>

<h2>HTML/CSS naming</h2>
<ul>
<li><p>id / class 명</p>

<ul>
<li>naming의 첫 시작에 숫자, 특수문자, 대문자의 사용은 지양한다.</li>
<li>id는 문서 내에서 한 번만 사용가능하며, id와 class 명은 같지 않도록 한다.</li>
<li>id는 <code>camelCase</code>로 작성한다.</li>
<li>class는 <code>under_score</code>로 작성하여 <code>형태_의미_상태</code> 순서로 조합하여, 3단계를 넘어가지 않는다.</li>
</ul>
<br />
<br />



## Page Introduce

`메인페이지` index.html

- 슬라이드 제작 및 슬라이드 플러그인(slick) 활용했습니다.

`서브페이지` sub1.html

- 스크롤 이벤트 제작, 원페이지 레이아웃을 작업했습니다.

`서브페이지` sub2.html

- skllor.js plugin을 사용하여 스크롤에 따라 이미지가 확대・축소됩니다.

`서브페이지` sub3.html

- CSS `linear-gradient` 사용해 hover 시 투명도를 표현했습니다.

`서브페이지` sub4.html

- 사용자 정보 작성을 위한 form을 제작했습니다.

`서브페이지` sub5.html

- kakao map API를 사용하여 위치를 나타내었습니다.

<br />

<ul>
<li><strong>반응형 사이즈</strong></li>
<blockquote><p>pc size 1024이상~</p>
<p>tablet size 768px 이상 1023px 이하</p>
<p>mobile size 767px 이하~</p>
</blockquote>
<br />
<br />

<h2>Layer structure</h2>
<figure><table>
<thead>
<tr><th>약속어</th><th>범위</th></tr></thead>
<tbody><tr><td>#wrapper</td><td>페이지 전체 영역</td></tr><tr><td>#header</td><td>머리글 영역</td></tr><tr><td>#container</td><td>본문 영역</td></tr><tr><td>#section</td><td>주요 콘텐츠 영역</td></tr><tr><td>#footer</td><td>바닥글 영역</td></tr><tr><td>.wrap</td><td>고정너비가 필요없을 때 콘텐츠 묶음 영역</td></tr><tr><td>.inner</td><td>고정너비가 필요할 때 콘텐츠 묶음 영역</td></tr></tbody>
</table></figure>
<br />
<br />

<h2>Main page</h2>
<p><img src="file:///Users/jungmin/Desktop/work01/main.png" referrerpolicy="no-referrer" alt="main"></p>
<br><br>
<br>
<h2>Sub page</h2>
<p><img src="file:///Users/jungmin/Desktop/work01/sub1_2.jpg" referrerpolicy="no-referrer" alt="sub1_2"></p>
<p>&nbsp;</p>
<p><img src="file:///Users/jungmin/Desktop/work01/sub3_4_5.jpg" referrerpolicy="no-referrer" alt="sub3_4_5"></p>
<br>
<br>
<br>
<hr />
<br>
<h3>작업 이후,</h3>
<p>콘텐츠들이 많이 있는 디자인 시안을 선택해 다양하고, 재미있게 코드를 짤 수 있을 것 같아 선정하게 되었습니다.</p>
<p>포트폴리오를 만들기 전 저의 목표는 &#39;처음부터 끝까지 내 손으로 짜보자.&#39; 였습니다.</p>
<p><strong>배웠던 점</strong></p>
<p>먼저 하나의 프로젝트처럼 통일감을 주기 위해 이름을 구조화하여 이름을 지었습니다.
메인페이지와 서브페이지의 공통적인 부분을 묶어 반응형 할 때 CSS를 간결하게 하여 코드를 최소화했습니다.
아직 스크립트 부분이 많이 부족하지만, 작업하면서 기록해놓고, 이해가 되지 않는 부분은 코드를 직접 써서 이해하도록 노력했습니다.</p>
<p>포트폴리오를 시작하고 구조를 짤 때 스크립트까지 깊게 생각하지 못했던 점이 아쉬웠습니다. 이로 인해 HTML의 구조를 바꿔야 하는 상황이 와서 CSS도 꼬였던 일이 많았습니다.
다음부터는 정확하게 무슨 스크립트를 구상할 것인지 어떻게 짤 것인지 생각하며 짜야겠다는 생각이 들었습니다.</p>
<p>또한, 반응형 슬라이드를 만들 때 고정적인 너비가 아니라 유동적인 너비를 만들어야 해서, 이미지와 스크립트와 같이 적용하니 원하는 화면이 나오지 않아 애를 많이 먹었습니다.</p>
<p>많이 검색해보고 찾아본 결과, 애니메이션을 적용할 때 CSS와 jQuery의 적절한 매치를 하는 방법을 찾을 수 있었습니다.</p>
<p><strong>앞으로</strong></p>
<p>작업하면서 내가 알았다고 생각했던 점들이 많이 부족하다고 반성하는 시간이었고, 다시 개념을 다질 수 있었던 계기였습니다.</p>
<p>그러면서도 하나하나 알아가는 재미를 느꼈고, 어떻게 하면 더 나은 방향으로 갈 수 있는지에 대해 고민해 볼 수 있는 시간을 가져서 보람있게 작업해서 나아갔습니다.</p>
<p>퍼블리싱을 하면서 콘텐츠를 보여줄 수 있는 다양한 방법들과 더 나은 표준성을 위해 계속 배워나가야겠다는 생각이 들었습니다.</p>
<br>
<br>
