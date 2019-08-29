console.log('関数------------')
function all (NF, APT) {
  let result = (NF + APT * 12)
  return result
}

let result = all (840, 500)
console.log(all(840, 500));

console.log('配列---------')
let player_list = ['Kokubo','Matsuda','Uchikawa'];
  console.log(player_list);
  console.log(player_list[0] = 'Yanagita');
  player_list.push('Senga');
  console.log(player_list);
