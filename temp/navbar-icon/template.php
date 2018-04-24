<?

if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) {
	die();
}

use \Bitrix\Main\Localization\Loc as Bitrix__Loc;

Bitrix__Loc::loadMessages(__FILE__);

/*

$phone1 = azbn_phone(azbn_field('CONTACTS_PHONE1'));
$email1 = azbn_field('CONTACTS_EMAIL1');
$country1 = azbn_field('CONTACTS_COUNTRY1');
$index1 = azbn_field('CONTACTS_INDEX1');
$city1 = azbn_field('CONTACTS_CITY1');
$adr1 = azbn_field('CONTACTS_ADR1');

$fb = azbn_field('CONTACTS_FB');
$ok = azbn_field('CONTACTS_OK');
$tw = azbn_field('CONTACTS_TW');
$vk = azbn_field('CONTACTS_VK');
*/

//echo azbn_activeCityCode();

if (!empty($arResult['ITEMS']) && is_array($arResult['ITEMS']) && count($arResult['ITEMS'])) {
	
	$active = null;
	
	foreach($arResult['ITEMS'] as $item_index => $item) {
		if($arParams['ACTIVE_ITEM']) {
			if($arParams['ACTIVE_ITEM']['ID'] == $item['ID'] || $arParams['ACTIVE_ITEM']['CODE'] == $item['CODE']) {
				$active = &$arResult['ITEMS'][$item_index];
			}
		}
	}
	
	if($active == null) {
		$active = &$arResult['ITEMS'][0];
	}
	
?>

<div class="cols navbar__collapse-cols cols  is--town"> 
	<div class="navbar__town  dropdown">
		<button type="button" class="navbar__town-link"><?=$active['~NAME'];?></button>
		<ul class="navbar__town-menu dropdown-menu">
			<?
			foreach($arResult['ITEMS'] as $item) {
			?>
			<li class="navbar__town-menu-item <?if(0){?> is--active <?}?> "> 
				<a href="<?=$item['DETAIL_PAGE_URL'];?>" class="navbar__town-menu-link azbn7__select-region-btn" data-region-code="<?=$item['CODE'];?>" ><?=$item['NAME'];?></a>
			</li>
			<?
			}
			?>
		</ul>
	</div>
</div>

<?
}
?>