import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class SocialMediaComponent implements OnInit {

  @Input() coloredIcons: boolean | undefined;
  @Input() githubName: string | undefined;
  @Input() linkedInName: string | undefined;
  @Input() twitterName: string | undefined;
  @Input() facebookName: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
