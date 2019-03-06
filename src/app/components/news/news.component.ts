import { Component, OnInit } from '@angular/core';
import { ReversePipe } from 'src/app/pipes/reverse.pipe';

import { News, SmallNews } from '../../classes/news';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
	private NEWS_LIST: News[] = [
		{id: 1, title: "Lorem Ipsum Dolor", author: "Admin", date: "00/00/000" , content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non justo sed neque faucibus pulvinar malesuada sit amet orci. Nunc in nunc augue. Sed hendrerit, nisl et tincidunt pellentesque, diam metus lobortis risus, bibendum efficitur nibh dui vel quam. Integer faucibus maximus convallis. Suspendisse potenti. Ut sem velit, vehicula non purus nec, placerat blandit tortor. Duis tincidunt, turpis quis sodales placerat, lectus lacus vehicula enim, at dignissim arcu orci eget nibh. Aliquam erat volutpat. Morbi mattis ipsum ante. Nullam pharetra sem non sapien facilisis accumsan. Pellentesque et elit tortor. Proin justo libero, mollis et faucibus sit amet, molestie vitae augue."},
		{id: 2, title: "Lorem Ipsum Dolor", author: "Admin", date: "00/00/000" , content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non justo sed neque faucibus pulvinar malesuada sit amet orci. Nunc in nunc augue. Sed hendrerit, nisl et tincidunt pellentesque, diam metus lobortis risus, bibendum efficitur nibh dui vel quam. Integer faucibus maximus convallis. Suspendisse potenti. Ut sem velit, vehicula non purus nec, placerat blandit tortor. Duis tincidunt, turpis quis sodales placerat, lectus lacus vehicula enim, at dignissim arcu orci eget nibh. Aliquam erat volutpat. Morbi mattis ipsum ante. Nullam pharetra sem non sapien facilisis accumsan. Pellentesque et elit tortor. Proin justo libero, mollis et faucibus sit amet, molestie vitae augue."},
		{id: 3, title: "Lorem Ipsum Dolor", author: "Admin", date: "00/00/000" , content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non justo sed neque faucibus pulvinar malesuada sit amet orci. Nunc in nunc augue. Sed hendrerit, nisl et tincidunt pellentesque, diam metus lobortis risus, bibendum efficitur nibh dui vel quam. Integer faucibus maximus convallis. Suspendisse potenti. Ut sem velit, vehicula non purus nec, placerat blandit tortor. Duis tincidunt, turpis quis sodales placerat, lectus lacus vehicula enim, at dignissim arcu orci eget nibh. Aliquam erat volutpat. Morbi mattis ipsum ante. Nullam pharetra sem non sapien facilisis accumsan. Pellentesque et elit tortor. Proin justo libero, mollis et faucibus sit amet, molestie vitae augue."},
		{id: 4, title: "Lorem Ipsum Dolor", author: "Admin", date: "00/00/000" , content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non justo sed neque faucibus pulvinar malesuada sit amet orci. Nunc in nunc augue. Sed hendrerit, nisl et tincidunt pellentesque, diam metus lobortis risus, bibendum efficitur nibh dui vel quam. Integer faucibus maximus convallis. Suspendisse potenti. Ut sem velit, vehicula non purus nec, placerat blandit tortor. Duis tincidunt, turpis quis sodales placerat, lectus lacus vehicula enim, at dignissim arcu orci eget nibh. Aliquam erat volutpat. Morbi mattis ipsum ante. Nullam pharetra sem non sapien facilisis accumsan. Pellentesque et elit tortor. Proin justo libero, mollis et faucibus sit amet, molestie vitae augue."},
		{id: 5, title: "Lorem Ipsum Dolor", author: "Admin", date: "00/00/000" , content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non justo sed neque faucibus pulvinar malesuada sit amet orci. Nunc in nunc augue. Sed hendrerit, nisl et tincidunt pellentesque, diam metus lobortis risus, bibendum efficitur nibh dui vel quam. Integer faucibus maximus convallis. Suspendisse potenti. Ut sem velit, vehicula non purus nec, placerat blandit tortor. Duis tincidunt, turpis quis sodales placerat, lectus lacus vehicula enim, at dignissim arcu orci eget nibh. Aliquam erat volutpat. Morbi mattis ipsum ante. Nullam pharetra sem non sapien facilisis accumsan. Pellentesque et elit tortor. Proin justo libero, mollis et faucibus sit amet, molestie vitae augue."},
		{id: 6, title: "Lorem Ipsum Dolor", author: "Admin", date: "00/00/000" , content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non justo sed neque faucibus pulvinar malesuada sit amet orci. Nunc in nunc augue. Sed hendrerit, nisl et tincidunt pellentesque, diam metus lobortis risus, bibendum efficitur nibh dui vel quam. Integer faucibus maximus convallis. Suspendisse potenti. Ut sem velit, vehicula non purus nec, placerat blandit tortor. Duis tincidunt, turpis quis sodales placerat, lectus lacus vehicula enim, at dignissim arcu orci eget nibh. Aliquam erat volutpat. Morbi mattis ipsum ante. Nullam pharetra sem non sapien facilisis accumsan. Pellentesque et elit tortor. Proin justo libero, mollis et faucibus sit amet, molestie vitae augue."},
		{id: 7, title: "Lorem Ipsum Dolor", author: "Admin", date: "00/00/000" , content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non justo sed neque faucibus pulvinar malesuada sit amet orci. Nunc in nunc augue. Sed hendrerit, nisl et tincidunt pellentesque, diam metus lobortis risus, bibendum efficitur nibh dui vel quam. Integer faucibus maximus convallis. Suspendisse potenti. Ut sem velit, vehicula non purus nec, placerat blandit tortor. Duis tincidunt, turpis quis sodales placerat, lectus lacus vehicula enim, at dignissim arcu orci eget nibh. Aliquam erat volutpat. Morbi mattis ipsum ante. Nullam pharetra sem non sapien facilisis accumsan. Pellentesque et elit tortor. Proin justo libero, mollis et faucibus sit amet, molestie vitae augue."},
		{id: 8, title: "Lorem Ipsum Dolor", author: "Admin", date: "00/00/000" , content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non justo sed neque faucibus pulvinar malesuada sit amet orci. Nunc in nunc augue. Sed hendrerit, nisl et tincidunt pellentesque, diam metus lobortis risus, bibendum efficitur nibh dui vel quam. Integer faucibus maximus convallis. Suspendisse potenti. Ut sem velit, vehicula non purus nec, placerat blandit tortor. Duis tincidunt, turpis quis sodales placerat, lectus lacus vehicula enim, at dignissim arcu orci eget nibh. Aliquam erat volutpat. Morbi mattis ipsum ante. Nullam pharetra sem non sapien facilisis accumsan. Pellentesque et elit tortor. Proin justo libero, mollis et faucibus sit amet, molestie vitae augue."}
	];

	private SMALL_NEWS_LIST: SmallNews[] = [
		{id: 1, date: "23.11.2018", content: "This is alpha stage of website."},
		{id: 2, date: "10.12.2018", content: "We are planning to improve this website."},
		{id: 3, date: "16.12.2018", content: "Raid list on website has been added. You can chceck what raids were on server."}
	]

	private reversePipe = new ReversePipe();
	private PAGINATION_MAX_ITEMS = 5;
	private newsList = this.reversePipe.transform(this.NEWS_LIST).slice(0, this.PAGINATION_MAX_ITEMS);

	constructor() { }

	ngOnInit() {
	}

	paginate(event) {
		this.newsList = this.reversePipe.transform(this.NEWS_LIST).slice(event.page * this.PAGINATION_MAX_ITEMS, (event.page + 1) * this.PAGINATION_MAX_ITEMS);
		console.log(this.newsList);
	}

	getPageLinkSize(): number {
		return Math.ceil(this.NEWS_LIST.length / this.PAGINATION_MAX_ITEMS);
	}
}
