import { Component, OnInit } from '@angular/core';
import { News, SmallNews } from '../../classes/news';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
	NEWS_LIST: News[] = [
		{id: 1, title: "Lorem Ipsum Dolor", author: "Admin", date: "00/00/000" , content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non justo sed neque faucibus pulvinar malesuada sit amet orci. Nunc in nunc augue. Sed hendrerit, nisl et tincidunt pellentesque, diam metus lobortis risus, bibendum efficitur nibh dui vel quam. Integer faucibus maximus convallis. Suspendisse potenti. Ut sem velit, vehicula non purus nec, placerat blandit tortor. Duis tincidunt, turpis quis sodales placerat, lectus lacus vehicula enim, at dignissim arcu orci eget nibh. Aliquam erat volutpat. Morbi mattis ipsum ante. Nullam pharetra sem non sapien facilisis accumsan. Pellentesque et elit tortor. Proin justo libero, mollis et faucibus sit amet, molestie vitae augue."}
	];

	SMALL_NEWS_LIST: SmallNews[] = [
		{id: 1, date: "16.12.2018", content: "Raid list on website has been added. You can chceck what raids were on server."},
		{id: 2, date: "10.12.2018", content: "We are planning to improve this website."},
		{id: 3, date: "23.11.2018", content: "This is alpha stage of website."}
	]

	constructor() { }

	ngOnInit() {
	}

}
