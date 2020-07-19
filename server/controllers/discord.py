import requests
from server.controllers.abc import SocialDriver
from jinja2 import Template
from bs4 import BeautifulSoup


class DiscordDriver(SocialDriver):
    def __init__(self, comment_api_url, testimonial_api_url):
        self.comment_webhook_address = comment_api_url
        self.testimonial_webhook_address = testimonial_api_url
        with open('/app/server/templates/contactus_email.jinja2', 'r') as fh:
            self.contact_template = Template(fh.read())

        with open('/app/server/templates/testimonial_post.jinja2', 'r') as fh:
            self.testimonial_template = Template(fh.read())

    def post_comment(self, comment, **metadata):
        sender_name = metadata['name']
        sender_email = metadata['email']
        comment = comment

        rendered_template = self.contact_template.render(
            sender_name=sender_name,
            sender_email=sender_email,
            message=comment
        )

        clean_template = BeautifulSoup(rendered_template).get_text()

        return requests.post(
            self.comment_webhook_address,
            json={
                'content': clean_template
            }
        )

    def post_testimonial(self, testimonial, name, program, year, id_str):
        rendered_template = self.testimonial_template.render(
            name=name,
            program=program,
            year=year,
            testimonial=testimonial,
            id_str=id_str
        )

        return requests.post(
            self.testimonial_webhook_address,
            json={
                'content': rendered_template
            }
        )
