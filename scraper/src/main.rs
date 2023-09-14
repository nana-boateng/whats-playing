use scraper::Element;


fn print_type_of<T>(_: &T) {
    println!("{}", std::any::type_name::<T>())
}
fn main() {
    let response = reqwest::blocking::get("http://www.torontoplex.com/listings/screenings.html");

    let html_content = response.unwrap().text().unwrap();
    let document = scraper::Html::parse_document(&html_content);

    // println!("{html_content}");

    let p_selector = scraper::Selector::parse("p").unwrap();
    let tr_selector = scraper::Selector::parse("tr").unwrap();

    let page_list = document.select(&p_selector).next().unwrap();
    for element in page_list.select(&tr_selector) {
        println!("{}", element.inner_html());
        // process_event(&element.value());
        // print_type_of(&element.value());
    }

    // let items = document.select(&calendar).next().unwrap();
    // for element in calendar.select() {
    //     unimplemented!();
    // }
    // // print_type_of(&items)
    // println!("{}", items.html());
}

// fn process_event(html: &dyn Element ) {
//     println!("{:?}",html);
// }
